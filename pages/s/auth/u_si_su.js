//rider sign in and sign up
import React from 'react';
import styles from './layout.module.css';
import Head from 'next/head';
import { Logo } from '../../images/vectors';
import { FaEnvelope } from 'react-icons/fa';
import { BsFillLockFill, BsEye, BsEyeSlash } from 'react-icons/bs';
import { CgKeyboard } from 'react-icons/cg';
import ReactCardFlip from 'react-card-flip';
import Truncate from 'react-truncate';
import Router from 'next/router';
import Loader from 'react-loader-spinner'
import { signIn, signUp, signOut } from '../../../functions/functions';
const [WHITE] = ['#FFFFFF'];

export default class index extends React.Component {
    constructor() {
        super();

        this.state = {
            error: false,
            errorMessage: '',
            isFlipped: false,

            displayVerification: false,//false at first then if it is not verified then you have to display it

            email: '',
            password: '',
            showPassword: false,

            firstName: '',
            lastName: '',
            email1: '',
            phoneNumber: '',
            password1: '',
            confirmPassword: '',
            showPassword1: false,
            showPassword2: false,

            loading: false,

        };
    };
    componentDidMount() {

    };
    render() {
        return (
            <div className={styles.container}>
                <Head>
                    <title>Sign In or Sign Up | Perch</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                    <link rel="icon" href="/favicon.ico" />
                    <html lang="en"></html>
                </Head>

                {this.state.isFlipped ?
                    <img src="/u_su.svg" alt="Sign in" className={styles.img} /> :
                    <img src="/u_si.svg" alt="Log in" className={styles.img} />}
                {
                    this.state.displayVerification ?
                        <div className={styles.card}///SIGN IN
                        >
                            <a className={styles.logo} href='/'><Logo color={'#4EB848'} /></a>
                            <p style={{ marginBottom: '10px' }} className={styles.title}>Contact Verification</p>
                            <p className={styles.cvTitle} >Enter the verification code sent to the number <span style={{ color: "#4EB848", display: 'inline-block' }}>+(919)110-7893</span></p>
                            <div className={styles.inputCont_}>
                                <div className={styles.inputContHalf} style={{ width: '65%' }}>
                                    <CgKeyboard color={'#4EB848'} size={20} style={{ marginRight: '10px', marginLeft: '10px' }} />
                                    <input type="text" placeholder="Code" className={styles.pH} />
                                </div>
                                <div className={styles.button1} style={{ width: '30%' }}>
                                    <p className={styles.buttonText1}>Verify</p>
                                </div>
                            </div>

                            <p className={styles.cvTitle} >Didnt get the code yet? <span className={styles.cursor} style={{ color: "#005BEA", display: 'inline', fontFamily: 'Gilroy-Medium' }}>Resend</span></p>

                            {this.state.error ?
                                <Truncate lines={1} ellipsis={'...'} className={styles.em}>
                                    {this.state.errorMessage}
                                </Truncate> :
                                <></>}
                            <a className={styles.button1} style={{ marginTop: this.state.error ? '0px' : '25px' }}
                                onClick={() => {
                                    if (!this.state.loading) {
                                        Router.push('/s/db/udash').then(() => window.scrollTo(0, 0));
                                    }
                                }}
                            >
                                {this.state.loading ?
                                    <Loader
                                        type="TailSpin"
                                        color={WHITE}
                                        height={'20px'}
                                        width={'20px'} />
                                    : <p className={styles.buttonText1}>Complete verification</p>
                                }
                            </a>
                            <a className={styles.fp_}><p className={styles.fp}>Change phone number or email</p></a>
                            <p className={styles.cu_}>Running into an issue? <a href='/contact_us'><p className={styles.cu}>Contact us</p></a></p>
                            <p className={styles.ca}>Wrong account?</p>
                            <a className={styles.caC}
                                onClick={() => {
                                    this.setState({ email: '', password: '', displayVerification: false, isFlipped: false });
                                    signOut.call(this);
                                }}>
                                <p className={styles.ca_}>Sign out</p>
                            </a>
                        </div>
                        :
                        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal" cardZIndex={2}>
                            <div className={styles.card}///SIGN IN
                            >
                                <a className={styles.logo} href='/'><Logo color={'#4EB848'} /></a>
                                <p className={styles.title}>Sign In</p>

                                <div className={styles.inputCont}>
                                    <FaEnvelope color={'#4EB848'} className={styles.env} />
                                    <input
                                        type="text"
                                        placeholder="Email"
                                        className={styles.pH}
                                        value={this.state.email}
                                        onChange={(event) => { this.setState({ email: event.target.value }) }}
                                    />
                                </div>
                                <div className={styles.inputCont}>
                                    <BsFillLockFill color={'#4EB848'} className={styles.pad} />
                                    <input
                                        type={this.state.showPassword ? "text" : "password"}
                                        placeholder="Password"
                                        className={styles.pH_}
                                        value={this.state.password}
                                        onChange={(event) => { this.setState({ password: event.target.value }) }}
                                    />
                                    {
                                        this.state.showPassword ?
                                            <BsEyeSlash color={'rgba(112, 112, 112, 0.9)'} className={styles.eye} onClick={() => { this.setState({ showPassword: !this.state.showPassword }) }} /> :
                                            <BsEye color={'rgba(112, 112, 112, 0.9)'} className={styles.eye} onClick={() => { this.setState({ showPassword: !this.state.showPassword }) }} />
                                    }
                                </div>
                                {this.state.error ?
                                    <Truncate lines={1} ellipsis={'...'} className={styles.em}>
                                        {this.state.errorMessage}
                                    </Truncate> :
                                    <></>}
                                <a className={styles.button1} style={{ marginTop: this.state.error ? '0px' : '25px' }}
                                    onClick={() => {
                                        if (!this.state.loading) {
                                            if (this.state.email == '')
                                                this.setState({ error: true, errorMessage: 'Please enter your email' });
                                            else if (this.state.password == '')
                                                this.setState({ error: true, errorMessage: 'Please enter your password' });
                                            else
                                                signIn.call(this, this.state.email, this.state.password, 'user');
                                        }
                                    }}>
                                    {this.state.loading ?
                                        <Loader
                                            type="TailSpin"
                                            color={WHITE}
                                            height={'20px'}
                                            width={'20px'} /> :
                                        <p className={styles.buttonText1}>Log in</p>
                                    }
                                </a>
                                <a className={styles.fp_}><p className={styles.fp}>Forgot password?</p></a>
                                <p className={styles.cu_}>Running into an issue? <a href='/contact_us'><p className={styles.cu}>Contact us</p></a></p>
                                <p className={styles.ca}>Don't have an account</p>
                                <a className={styles.caC}
                                    onClick={() => { this.setState({ isFlipped: !this.state.isFlipped, error: false }) }}>
                                    <p className={styles.ca_}>Create a new account</p>
                                </a>
                            </div>

                            <div className={styles.card}//SIGN UP
                            >
                                <a className={styles.logo} href='/'><Logo color={'#4EB848'} /></a>
                                <p className={styles.title}>Sign up</p>


                                <div className={styles.inputCont_}>
                                    <div className={styles.inputContHalf}>
                                        <input
                                            type="text"
                                            placeholder="First Name"
                                            className={styles.pH}
                                            value={this.state.firstName}
                                            onChange={(event) => { this.setState({ firstName: event.target.value }) }}
                                        />
                                    </div>
                                    <div className={styles.inputContHalf}>
                                        <input
                                            type="text"
                                            placeholder="Last Name"
                                            className={styles.pH}
                                            value={this.state.lastName}
                                            onChange={(event) => { this.setState({ lastName: event.target.value }) }}
                                        />
                                    </div>
                                </div>
                                <div className={styles.inputCont}>
                                    <input
                                        type="text"
                                        placeholder="Email"
                                        className={styles.pH_}
                                        value={this.state.email1}
                                        onChange={(event) => { this.setState({ email1: event.target.value }) }}
                                    />
                                </div>
                                <div className={styles.inputCont}>
                                    <input
                                        type="text"
                                        placeholder="Phone Number"
                                        className={styles.pH_}
                                        value={this.state.phoneNumber}
                                        onChange={(event) => { this.setState({ phoneNumber: event.target.value }) }}
                                    />
                                </div>
                                <div className={styles.inputCont_}>
                                    <div className={styles.inputContHalf}>
                                        <input
                                            type={this.state.showPassword1 ? "text" : "password"}
                                            placeholder="Password"
                                            className={styles.pH}
                                            value={this.state.password1}
                                            onChange={(event) => { this.setState({ password1: event.target.value }) }} />
                                        {
                                            this.state.showPassword1 ?
                                                <BsEyeSlash color={'rgba(112, 112, 112, 0.9)'} className={styles.eye} onClick={() => { this.setState({ showPassword1: !this.state.showPassword1 }) }} /> :
                                                <BsEye color={'rgba(112, 112, 112, 0.9)'} className={styles.eye} onClick={() => { this.setState({ showPassword1: !this.state.showPassword1 }) }} />
                                        }
                                    </div>
                                    <div className={styles.inputContHalf}>
                                        <input
                                            type={this.state.showPassword2 ? "text" : "password"}
                                            placeholder="Confirm Password"
                                            className={styles.pH}
                                            value={this.state.confirmPassword}
                                            onChange={(event) => { this.setState({ confirmPassword: event.target.value }) }}
                                        />
                                        {
                                            this.state.showPassword2 ?
                                                <BsEyeSlash color={'rgba(112, 112, 112, 0.9)'} className={styles.eye} onClick={() => { this.setState({ showPassword2: !this.state.showPassword2 }) }} /> :
                                                <BsEye color={'rgba(112, 112, 112, 0.9)'} className={styles.eye} onClick={() => { this.setState({ showPassword2: !this.state.showPassword2 }) }} />
                                        }
                                    </div>
                                </div>
                                {this.state.error ?
                                    <Truncate lines={1} ellipsis={'...'} className={styles.em}>
                                        {this.state.errorMessage}
                                    </Truncate> :
                                    <></>}
                                <a className={styles.button1}
                                    onClick={() => {
                                        if (!this.state.loading) {
                                            if (this.state.firstName == '')
                                                this.setState({ error: true, errorMessage: 'Please enter your first name' });
                                            else if (this.state.lastName == '')
                                                this.setState({ error: true, errorMessage: 'Please enter your last name' });
                                            else if (this.state.email1 == '')
                                                this.setState({ error: true, errorMessage: 'Please enter your email address' });
                                            else if (this.state.phoneNumber == '')
                                                this.setState({ error: true, errorMessage: 'Please enter your phone number' });
                                            else if (this.state.password1 == '')
                                                this.setState({ error: true, errorMessage: 'Please enter a password' });
                                            else if (this.state.password1 !== this.state.confirmPassword)
                                                this.setState({ error: true, errorMessage: 'Passwords do not match', confirmPassword: '' });
                                            else
                                                signUp.call(
                                                    this,
                                                    this.state.firstName,
                                                    this.state.lastName,
                                                    this.state.email1,
                                                    this.state.phoneNumber,
                                                    this.state.password1
                                                );
                                        }

                                    }}>
                                    {this.state.loading ?
                                        <Loader
                                            type="TailSpin"
                                            color={WHITE}
                                            height={'20px'}
                                            width={'20px'} />
                                        : <p className={styles.buttonText1}>Sign up</p>
                                    }
                                </a>
                                <p style={{ marginTop: '10px' }} className={styles.cu_}>Running into an issue? <a href='/contact_us'><p className={styles.cu}>Contact us</p></a></p>
                                <p className={styles.ca}>Have an account ?</p>
                                <a className={styles.caC}
                                    onClick={() => { this.setState({ isFlipped: !this.state.isFlipped, error: false }) }}>
                                    <p className={styles.ca_}>Log in</p>
                                </a>

                            </div>
                        </ReactCardFlip>

                }
            </div>
        );
    }
}