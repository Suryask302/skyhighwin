//importing modules
const axios = require('axios')
const { request } = require("../db/connect")
const { sign } = require('jsonwebtoken')
const secret = process.env.DOTNETTOKEN
const JWTSecret = process.env.JWTSECRET

//apis
const register = async (req, res) => {

    try {

        const { country, countryCode, email, mobile, name, passcode, sponserId, trpassword } = req.body

        const checkSponser = await axios({
            method: "post",
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            url: "https://webapi.skyhighwin.live/androidwebservices.asmx/CheckSponserID",
            data: {
                CusID: sponserId,
                token: secret
            }
        })


        if (!checkSponser || checkSponser['data']['Statuscode'] != 200) {
            return res.status(400).json({
                message: 'Invalid input, please check Sponser id'
            })
        }


        let { data } = await axios({

            method: "post",
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            url: "https://webapi.skyhighwin.live/androidwebservices.asmx/RegistrastionPre",
            data: {
                token: secret,
                SponserID: sponserId,
                Name: name,
                Email: email,
                Country: country,
                CountryCode: countryCode,
                MobileNo: mobile,
                Password: passcode,
                TxPassword: trpassword
            }

        })

        if (data.result.toUpperCase() == 'FAILED') {
            return res.status(400).json({
                message: 'Invalid input, please check Sponser id'
            })
        }

        return res.status(201).send({
            message: data['Message'],
            result: data['result'],
            data: data['Data']

        })

    } catch (error) {
        return res.status(500).json({
            message: error['message']
        })
    }

}

const registerPost = async (req, res) => {

    try {

        const { CusID } = req.body

        let { data } = await axios({

            method: "post",
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            url: "https://webapi.skyhighwin.live/androidwebservices.asmx/Registrastion",
            data: {
                token: secret,
                CusID
            }
        })

        if (data.result.toUpperCase() == 'FAILED') {
            return res.status(400).json({
                message: 'Invalid input, please check Sponser id'
            })
        }

        return res.status(201).send({
            message: data['Message'],
            result: data['result'],
            data: data['Data']

        })



    } catch (error) {
        return res.status(500).json({
            message: error['message']
        })
    }

}

const login = async (req, res) => {

    try {

        const { CusID, Password } = req.body
        let { data } = await axios({

            method: "post",
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            url: "https://webapi.skyhighwin.live/androidwebservices.asmx/CheckLogin",
            data: {
                token: secret,
                CusID: Number(CusID),
                Password
            }

        })

        if (data.result.toUpperCase() == 'FAILED') {
            return res.status(400).json({
                message: 'Invalid input, please check Sponser id'
            })
        }

        const payload = {
            custId: data['Data']['CustID'],
            userName: data['Data']['UserName']
        }
        const options = {
            expiresIn: '1h'
        }

        let token = sign(
            payload,
            JWTSecret,
            options
        )


        return res.status(200).send({
            message: data['Message'],
            result: data['result'],
            data: data['Data'],
            token: token
        })


    } catch (error) {
        return res.status(500).json({
            message: error['message']
        })
    }
}

const fetchRef = async (req, res) => {

    try {

        // let fullQuery = "select   dbo.ufn_GetIndianDateTime()"
        // let fullQuery = "select * from custrecords where cust_sponserid = 5796845"

        let fullQuery = "select Cust_UserName ,Cust_Name, Cust_mobileNo , rankstage ,"
        fullQuery = fullQuery + " CASE WHEN Pin_Approved = 1  THEN 'Active' ELSE 'Deactive' END AS Status "
        fullQuery = fullQuery + " , Paid_Date , Entry_Date , rankname from custrecords where cust_sponserid = 5796845"



        const resData = await request.query(fullQuery)
        console.log(resData)
        return res.status(200).send({
            message: "Success",
            data: resData['recordset']
        })


    } catch (error) {
        console.log(error)
    }

}

const directTeam = async (req, res) => {

    try {

        const { CusID } = req.body

        let fullQuery = `select Top 1  from 
        dirleveldtl,CustRecords 
        where CustID=${CusID} 
        AND SponserID = ${CusID} 
        and lvlno =1 ORDER BY Entry_Date asc`

        const resData = await request.query(fullQuery)
        console.log(resData)

    } catch (error) {
        console.log(error)
    }

}

const activeTeam = async (req, res) => {

    try {

        const { CusID, lvl } = req.body

        let fullQuery = `select  Custid , Cust_UserName, Cust_Name, lvlno, Pin_Approved,
        Entry_Date, Paid_Date, lvlno as Level, rankno,
        rankstage from dirleveldtl,CustRecords where CustID=CusID AND
        SponserID = ${CusID}  and lvlno= ${lvl} ORDER BY Entry_Date asc`

        const resData = await request.query(fullQuery)
        console.log(resData)

    } catch (error) {
        console.log(error)
    }

}

const purchaseHistory = async (req, res) => {

    try {

        const { CusID } = req.body

        let fullQuery = `select serialno,cusid	,linktable,	month1	,status1,payment_relased,puramt,	purdate, (puramt*4) as Maximumern,	(puramt*bp1) AS maxwithdraw,(puramt*5) AS fivexincome,(maxwithdraw-payment_relased) as remain,	stat,	wallettype,	validity,receiptno,categories,pkgtype from  investment_roi_monthly  where enab_disa = 1 and cusid = 388514 ORDER BY purdate DESC`

        const resData = await request.query(fullQuery)
        console.log(resData)

    } catch (error) {
        console.log(error)
    }

}



module.exports = {
    register,
    registerPost,
    login,
    fetchRef,
    directTeam,
    activeTeam,
    purchaseHistory
}