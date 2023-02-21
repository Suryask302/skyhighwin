import React, { useState } from "react";
import Logo from "../../images/logo.png";
import LogoDark from "../../images/logo-dark.png";
import PageContainer from "../../layout/page-container/PageContainer";
import Head from "../../layout/head/Head";
import AuthFooter from "./AuthFooter";
import {
  Block,
  BlockContent,
  BlockDes,
  BlockHead,
  BlockTitle,
  Button,
  Icon,
  PreviewCard,
} from "../../components/Component";
import { Spinner, FormGroup, Alert } from "reactstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = ({ history }) => {
  const [passState, setPassState] = useState(false);
  const [verifyOtp, setverifyOtp] = useState(false);
  const [otp, setOtp] = useState(null);
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [user, setUser] = useState(false)
  const { errors, register, handleSubmit } = useForm();

  const handleFormSubmit = async (e) => {
    try {

      setLoading(true);
      let resp = await axios({
        method: "post",
        url: "http://localhost:4000/skyhigh/register",
        data: {
          ...e
        }
      })

      if (resp.data) {

        setOtp(resp['data']['data']['OTP'])
        setverifyOtp(true)
        setUser(resp.data)

      } else {
        setErr('something went wrong')
      }

    } catch (error) {
      setLoading(false);
      setErr(error['response']['data']['message'] || 'unable to register with credintials')
    }

  };

  const verification = async (e) => {

    try {
      setLoading2(true)
      if (otp === e['otp']) {

        let response = await axios({
          method: "post",
          url: "https://skyhigh.onrender.com/skyhigh/registerPost",
          data: {
            CusID: user['data']['CustID']
          }
        })

        console.log(response.data)

        setTimeout(() =>
          history.push(`${process.env.PUBLIC_URL}/auth-success`),
          2000
        );

      } else {
        setErr('Invalid Verification Code Entered')
      }
      setLoading2(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <React.Fragment>
      <Head title="Register" />
      <PageContainer>
        <Block className="nk-block-middle nk-auth-body  wide-xs">
          <div className="brand-logo pb-4 text-center">
            <Link to={`${process.env.PUBLIC_URL}/`} className="logo-link">
              <img className="logo-light logo-img logo-img-lg" src={Logo} alt="logo" />
              <img className="logo-dark logo-img logo-img-lg" src={LogoDark} alt="logo-dark" />
            </Link>
          </div>
          <PreviewCard className="card-bordered" bodyClass="card-inner-lg">
            <BlockHead>
              <BlockContent>
                <BlockTitle tag="h4">Register</BlockTitle>
                <BlockDes>
                  <p>Create New Skyhigh win Account</p>
                </BlockDes>
              </BlockContent>
            </BlockHead>

            {err && (
              <div className="mb-3">
                <Alert color="danger" className="alert-icon">
                  {" "}
                  <Icon name="alert-circle" /> {err}
                </Alert>
              </div>
            )}

            {
              !verifyOtp ?
                <form className="is-alter" onSubmit={handleSubmit(handleFormSubmit)}>
                  <FormGroup>
                    <label className="form-label" htmlFor="name">
                      Name
                    </label>
                    <div className="form-control-wrap">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        ref={register({ required: true })}
                        className="form-control-lg form-control"
                      />
                      {errors.name && <p className="invalid">This field is required</p>}
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <div className="form-label-group">
                      <label className="form-label" htmlFor="default-01">
                        Email or Username
                      </label>
                    </div>
                    <div className="form-control-wrap">
                      <input
                        type="text"
                        bssize="lg"
                        id="default-01"
                        name="email"
                        ref={register({ required: true })}
                        className="form-control-lg form-control"
                        placeholder="Enter your email address or username"
                      />
                      {errors.email && <p className="invalid">This field is required</p>}
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <div className="form-label-group">
                      <label className="form-label" htmlFor="default-01">
                        Sponser ID
                      </label>
                    </div>
                    <div className="form-control-wrap">
                      <input
                        type="text"
                        bssize="lg"
                        id="default-02"
                        name="sponserId"
                        ref={register({ required: true })}
                        className="form-control-lg form-control"
                        placeholder="Enter sponserId"
                      />
                      {errors.sponserId && <p className="invalid">This field is required</p>}
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <div className="form-label-group">
                      <label className="form-label" htmlFor="default-03">
                        Country
                      </label>
                    </div>
                    <div className="form-control-wrap">
                      <input
                        type="text"
                        bssize="lg"
                        id="default-03"
                        name="country"
                        ref={register({ required: true })}
                        className="form-control-lg form-control"
                        placeholder="Enter your country"
                      />
                      {errors.country && <p className="invalid">This field is required</p>}
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <div className="form-label-group">
                      <label className="form-label" htmlFor="default-04">
                        Country Code
                      </label>
                    </div>
                    <div className="form-control-wrap">
                      <input
                        type="text"
                        bssize="lg"
                        id="default-04"
                        name="countryCode"
                        ref={register({ required: true })}
                        className="form-control-lg form-control"
                        placeholder="Enter your countryCode"
                      />
                      {errors.countryCode && <p className="invalid">This field is required</p>}
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <div className="form-label-group">
                      <label className="form-label" htmlFor="default-01">
                        Mobile No
                      </label>
                    </div>
                    <div className="form-control-wrap">
                      <input
                        type="text"
                        bssize="lg"
                        id="default-05"
                        name="mobile"
                        ref={register({ required: true })}
                        className="form-control-lg form-control"
                        placeholder="Enter your mobile number"
                      />
                      {errors.mobile && <p className="invalid">This field is required</p>}
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <div className="form-label-group">
                      <label className="form-label" htmlFor="password">
                        Password
                      </label>
                    </div>
                    <div className="form-control-wrap">
                      <a
                        href="#password"
                        onClick={(ev) => {
                          ev.preventDefault();
                          setPassState(!passState);
                        }}
                        className={`form-icon lg form-icon-right passcode-switch ${passState ? "is-hidden" : "is-shown"}`}
                      >
                        <Icon name="eye" className="passcode-icon icon-show"></Icon>

                        <Icon name="eye-off" className="passcode-icon icon-hide"></Icon>
                      </a>
                      <input
                        type={passState ? "text" : "password"}
                        id="password"
                        name="passcode"
                        ref={register({ required: "This field is required" })}
                        placeholder="Enter your passcode"
                        className={`form-control-lg form-control ${passState ? "is-hidden" : "is-shown"}`}
                      />
                      {errors.passcode && <span className="invalid">{errors.passcode.message}</span>}
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <div className="form-label-group">
                      <label className="form-label" htmlFor="password">
                        Transaction Password
                      </label>
                    </div>
                    <div className="form-control-wrap">
                      <a
                        href="#password"
                        onClick={(ev) => {
                          ev.preventDefault();
                          setPassState(!passState);
                        }}
                        className={`form-icon lg form-icon-right passcode-switch ${passState ? "is-hidden" : "is-shown"}`}
                      >
                        <Icon name="eye" className="passcode-icon icon-show"></Icon>

                        <Icon name="eye-off" className="passcode-icon icon-hide"></Icon>
                      </a>
                      <input
                        type={passState ? "text" : "password"}
                        id="password"
                        name="trpassword"
                        ref={register({ required: "This field is required" })}
                        placeholder="Enter your trpassword"
                        className={`form-control-lg form-control ${passState ? "is-hidden" : "is-shown"}`}
                      />
                      {errors.trpassword && <span className="invalid">{errors.trpassword.message}</span>}
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <Button type="submit" color="primary" size="lg" className="btn-block">
                      {loading ? <Spinner size="sm" color="light" /> : "Register"}
                    </Button>
                  </FormGroup>
                </form>
                :
                <form className="is-alter" onSubmit={handleSubmit(verification)}>
                  <FormGroup>
                    <label className="form-label" htmlFor="otp">
                      Enter verification code
                    </label>
                    <div className="form-control-wrap">
                      <input
                        type="text"
                        id="otp"
                        name="otp"
                        placeholder="Enter verification code"
                        ref={register({ required: true })}
                        className="form-control-lg form-control"
                      />
                      {errors.otp && <p className="invalid">This field is required</p>}
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <Button type="submit" color="primary" size="lg" className="btn-block">
                      {loading2 ? <Spinner size="sm" color="light" /> : "verify"}
                    </Button>
                  </FormGroup>
                </form>
            }
            <div className="form-note-s2 text-center pt-4">
              {" "}
              Already have an account?{" "}
              <Link to={`${process.env.PUBLIC_URL}/auth-login`}>
                <strong>Sign in instead</strong>
              </Link>
            </div>
            <div className="text-center pt-4 pb-3">
              <h6 className="overline-title overline-title-sap">
                <span></span>
              </h6>
            </div>
          </PreviewCard>
        </Block>
        <AuthFooter />
      </PageContainer>
    </React.Fragment>
  );
};
export default Register;
