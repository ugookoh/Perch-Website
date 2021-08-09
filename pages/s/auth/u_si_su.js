//rider sign in and sign up
import React from 'react';
import styles from './layout.module.css';
import Head from 'next/head';
import axios from 'axios';
import { Logo } from '../../../functions/images/vectors';
import { FaEnvelope } from 'react-icons/fa';
import { BsFillLockFill, BsEye, BsEyeSlash } from 'react-icons/bs';
import { CgKeyboard } from 'react-icons/cg';
import ReactCardFlip from 'react-card-flip';
import Truncate from 'react-truncate';
import Router from 'next/router';
import Loader from 'react-loader-spinner';
import firebase from 'firebase';
import { signIn, signUp, signOut, sendPasswordResetLink, sendVerification, changeEmailOrPhoneNumber } from '../../../functions/functions';
const [WHITE] = ['#FFFFFF'];

export default class index extends React.Component {

    static async getInitialProps({ query }) {
        const { mode, referralCode } = query;

        return {
            mode: mode,
            referralCode: referralCode,
        }
    }

    constructor(props) {
        super(props);

        this.state = {
            error: false,
            errorMessage: '',
            isFlipped: this?.props?.mode == 'signUp' ? true : false,

            displayVerification: false,//false at first then if it is not verified then you have to display it
            changeEmail_PhoneNumber: false,
            email: '',
            password: '',
            showPassword: false,
            forgotPassword: false,

            changePhoneLoader: false,

            firstName: '',
            lastName: '',
            email1: '',
            phoneNumber: '',
            password1: '',
            confirmPassword: '',
            showPassword1: false,
            showPassword2: false,
            userDetails: null,
            phoneVerificationCode: '',
            phoneVerified: false,
            verificationPhoneLoader: false,
            referralCode: this.props.referralCode || '',
            newPhoneNumber: '',

            phoneNumberTimer: 0,

            loading: false,
            width: '100vw', height: '100vh',
            countryCode: 1,
        };
    };
    componentDidMount() {
        window.addEventListener('resize', this.updateWindowDimensions);
    };
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    };
    resend = (type) => {
        this.setState({ phoneNumberTimer: 60 }, () => {
            const time = setInterval(() => {
                if (this.state.phoneNumberTimer == 0)
                    clearInterval(time);
                else
                    this.setState({ phoneNumberTimer: this.state.phoneNumberTimer - 1 })
            }, 1000);
        });
        sendVerification.call(this, this.state.userDetails.userID, type, 'storeAndSend', 'nocode', this.state.userDetails.phoneNumber, this.state.userDetails.email, this.state.userDetails.firstName,);
    }

    updateWindowDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }
    render() {
        if (this.state.phoneVerified) {
            firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
                if (this.state.isFlipped)
                    firebase.auth().signInWithEmailAndPassword(this.state.email1, this.state.password1)
                        .then(() => {
                            Router.push('/s/db/udash').then(() => window.scrollTo(0, 0));
                        }).catch((error) => { this.setState({ error: true, errorMessage: 'Network error. Please refresh page and log in' }) })
                else
                    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
                        .then(() => {
                            Router.push('/s/db/udash').then(() => window.scrollTo(0, 0));
                        })
                        .catch((error) => { this.setState({ error: true, errorMessage: 'Network error. Please refresh page and log in' }) })
            })
        }
        return (
            <div className={styles.container}>
                <Head>
                    <title>Sign In or Sign Up | Perch</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <link rel="manifest" href="/site.webmanifest" />
                    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                    <meta name="theme-color" content="#ffffff" />
                    <html lang="en"></html>
                </Head>

                {this.state.isFlipped ?
                    <img src="/u_su.svg" alt="Sign in" className={styles.img} style={{ height: this.state.height, width: this.state.width }} /> :
                    <img src="/u_si.svg" alt="Log in" className={styles.img} style={{ height: this.state.height, width: this.state.width }} />}
                {
                    this.state.changeEmail_PhoneNumber ?
                        <div className={styles.card}///SIGN IN
                        >
                            <a className={styles.logo} href='/'><Logo color={'#4EB848'} /></a>
                            <p style={{ marginBottom: '10px', textAlign: 'center' }} className={styles.title}>Change Email / Phone Number</p>

                            <p className={styles.cvTitle}>Enter new phone number</p>
                            <div className={styles.inputCont_}>
                                <div className={styles.inputContHalf} style={{ width: '65%' }}>
                                    <select
                                        value={`+${this.state.countryCode}`}
                                        className={styles.countryCodeBox}
                                        style={{ width: '30%' }}
                                        onChange={(v) => {
                                            this.setState({
                                                countryCode: v.target.value,
                                            })
                                        }}
                                    >
                                        <option value="" style={{ display: 'none' }}>{`+${this.state.countryCode}`}</option>
                                        <option data-countryCode="CA" value="1">Canada (+1)</option>
                                        <optgroup label="Other countries">
                                            <option data-countryCode="DZ" value="213">Algeria (+213)</option>
                                            <option data-countryCode="AD" value="376">Andorra (+376)</option>
                                            <option data-countryCode="AO" value="244">Angola (+244)</option>
                                            <option data-countryCode="AI" value="1264">Anguilla (+1264)</option>
                                            <option data-countryCode="AG" value="1268">Antigua &amp; Barbuda (+1268)</option>
                                            <option data-countryCode="AR" value="54">Argentina (+54)</option>
                                            <option data-countryCode="AM" value="374">Armenia (+374)</option>
                                            <option data-countryCode="AW" value="297">Aruba (+297)</option>
                                            <option data-countryCode="AU" value="61">Australia (+61)</option>
                                            <option data-countryCode="AT" value="43">Austria (+43)</option>
                                            <option data-countryCode="AZ" value="994">Azerbaijan (+994)</option>
                                            <option data-countryCode="BS" value="1242">Bahamas (+1242)</option>
                                            <option data-countryCode="BH" value="973">Bahrain (+973)</option>
                                            <option data-countryCode="BD" value="880">Bangladesh (+880)</option>
                                            <option data-countryCode="BB" value="1246">Barbados (+1246)</option>
                                            <option data-countryCode="BY" value="375">Belarus (+375)</option>
                                            <option data-countryCode="BE" value="32">Belgium (+32)</option>
                                            <option data-countryCode="BZ" value="501">Belize (+501)</option>
                                            <option data-countryCode="BJ" value="229">Benin (+229)</option>
                                            <option data-countryCode="BM" value="1441">Bermuda (+1441)</option>
                                            <option data-countryCode="BT" value="975">Bhutan (+975)</option>
                                            <option data-countryCode="BO" value="591">Bolivia (+591)</option>
                                            <option data-countryCode="BA" value="387">Bosnia Herzegovina (+387)</option>
                                            <option data-countryCode="BW" value="267">Botswana (+267)</option>
                                            <option data-countryCode="BR" value="55">Brazil (+55)</option>
                                            <option data-countryCode="BN" value="673">Brunei (+673)</option>
                                            <option data-countryCode="BG" value="359">Bulgaria (+359)</option>
                                            <option data-countryCode="BF" value="226">Burkina Faso (+226)</option>
                                            <option data-countryCode="BI" value="257">Burundi (+257)</option>
                                            <option data-countryCode="KH" value="855">Cambodia (+855)</option>
                                            <option data-countryCode="CM" value="237">Cameroon (+237)</option>
                                            <option data-countryCode="CA" value="1">Canada (+1)</option>
                                            <option data-countryCode="CV" value="238">Cape Verde Islands (+238)</option>
                                            <option data-countryCode="KY" value="1345">Cayman Islands (+1345)</option>
                                            <option data-countryCode="CF" value="236">Central African Republic (+236)</option>
                                            <option data-countryCode="CL" value="56">Chile (+56)</option>
                                            <option data-countryCode="CN" value="86">China (+86)</option>
                                            <option data-countryCode="CO" value="57">Colombia (+57)</option>
                                            <option data-countryCode="KM" value="269">Comoros (+269)</option>
                                            <option data-countryCode="CG" value="242">Congo (+242)</option>
                                            <option data-countryCode="CK" value="682">Cook Islands (+682)</option>
                                            <option data-countryCode="CR" value="506">Costa Rica (+506)</option>
                                            <option data-countryCode="HR" value="385">Croatia (+385)</option>
                                            <option data-countryCode="CU" value="53">Cuba (+53)</option>
                                            <option data-countryCode="CY" value="90392">Cyprus North (+90392)</option>
                                            <option data-countryCode="CY" value="357">Cyprus South (+357)</option>
                                            <option data-countryCode="CZ" value="42">Czech Republic (+42)</option>
                                            <option data-countryCode="DK" value="45">Denmark (+45)</option>
                                            <option data-countryCode="DJ" value="253">Djibouti (+253)</option>
                                            <option data-countryCode="DM" value="1809">Dominica (+1809)</option>
                                            <option data-countryCode="DO" value="1809">Dominican Republic (+1809)</option>
                                            <option data-countryCode="EC" value="593">Ecuador (+593)</option>
                                            <option data-countryCode="EG" value="20">Egypt (+20)</option>
                                            <option data-countryCode="SV" value="503">El Salvador (+503)</option>
                                            <option data-countryCode="GQ" value="240">Equatorial Guinea (+240)</option>
                                            <option data-countryCode="ER" value="291">Eritrea (+291)</option>
                                            <option data-countryCode="EE" value="372">Estonia (+372)</option>
                                            <option data-countryCode="ET" value="251">Ethiopia (+251)</option>
                                            <option data-countryCode="FK" value="500">Falkland Islands (+500)</option>
                                            <option data-countryCode="FO" value="298">Faroe Islands (+298)</option>
                                            <option data-countryCode="FJ" value="679">Fiji (+679)</option>
                                            <option data-countryCode="FI" value="358">Finland (+358)</option>
                                            <option data-countryCode="FR" value="33">France (+33)</option>
                                            <option data-countryCode="GF" value="594">French Guiana (+594)</option>
                                            <option data-countryCode="PF" value="689">French Polynesia (+689)</option>
                                            <option data-countryCode="GA" value="241">Gabon (+241)</option>
                                            <option data-countryCode="GM" value="220">Gambia (+220)</option>
                                            <option data-countryCode="GE" value="7880">Georgia (+7880)</option>
                                            <option data-countryCode="DE" value="49">Germany (+49)</option>
                                            <option data-countryCode="GH" value="233">Ghana (+233)</option>
                                            <option data-countryCode="GI" value="350">Gibraltar (+350)</option>
                                            <option data-countryCode="GR" value="30">Greece (+30)</option>
                                            <option data-countryCode="GL" value="299">Greenland (+299)</option>
                                            <option data-countryCode="GD" value="1473">Grenada (+1473)</option>
                                            <option data-countryCode="GP" value="590">Guadeloupe (+590)</option>
                                            <option data-countryCode="GU" value="671">Guam (+671)</option>
                                            <option data-countryCode="GT" value="502">Guatemala (+502)</option>
                                            <option data-countryCode="GN" value="224">Guinea (+224)</option>
                                            <option data-countryCode="GW" value="245">Guinea - Bissau (+245)</option>
                                            <option data-countryCode="GY" value="592">Guyana (+592)</option>
                                            <option data-countryCode="HT" value="509">Haiti (+509)</option>
                                            <option data-countryCode="HN" value="504">Honduras (+504)</option>
                                            <option data-countryCode="HK" value="852">Hong Kong (+852)</option>
                                            <option data-countryCode="HU" value="36">Hungary (+36)</option>
                                            <option data-countryCode="IS" value="354">Iceland (+354)</option>
                                            <option data-countryCode="IN" value="91">India (+91)</option>
                                            <option data-countryCode="ID" value="62">Indonesia (+62)</option>
                                            <option data-countryCode="IR" value="98">Iran (+98)</option>
                                            <option data-countryCode="IQ" value="964">Iraq (+964)</option>
                                            <option data-countryCode="IE" value="353">Ireland (+353)</option>
                                            <option data-countryCode="IL" value="972">Israel (+972)</option>
                                            <option data-countryCode="IT" value="39">Italy (+39)</option>
                                            <option data-countryCode="JM" value="1876">Jamaica (+1876)</option>
                                            <option data-countryCode="JP" value="81">Japan (+81)</option>
                                            <option data-countryCode="JO" value="962">Jordan (+962)</option>
                                            <option data-countryCode="KZ" value="7">Kazakhstan (+7)</option>
                                            <option data-countryCode="KE" value="254">Kenya (+254)</option>
                                            <option data-countryCode="KI" value="686">Kiribati (+686)</option>
                                            <option data-countryCode="KP" value="850">Korea North (+850)</option>
                                            <option data-countryCode="KR" value="82">Korea South (+82)</option>
                                            <option data-countryCode="KW" value="965">Kuwait (+965)</option>
                                            <option data-countryCode="KG" value="996">Kyrgyzstan (+996)</option>
                                            <option data-countryCode="LA" value="856">Laos (+856)</option>
                                            <option data-countryCode="LV" value="371">Latvia (+371)</option>
                                            <option data-countryCode="LB" value="961">Lebanon (+961)</option>
                                            <option data-countryCode="LS" value="266">Lesotho (+266)</option>
                                            <option data-countryCode="LR" value="231">Liberia (+231)</option>
                                            <option data-countryCode="LY" value="218">Libya (+218)</option>
                                            <option data-countryCode="LI" value="417">Liechtenstein (+417)</option>
                                            <option data-countryCode="LT" value="370">Lithuania (+370)</option>
                                            <option data-countryCode="LU" value="352">Luxembourg (+352)</option>
                                            <option data-countryCode="MO" value="853">Macao (+853)</option>
                                            <option data-countryCode="MK" value="389">Macedonia (+389)</option>
                                            <option data-countryCode="MG" value="261">Madagascar (+261)</option>
                                            <option data-countryCode="MW" value="265">Malawi (+265)</option>
                                            <option data-countryCode="MY" value="60">Malaysia (+60)</option>
                                            <option data-countryCode="MV" value="960">Maldives (+960)</option>
                                            <option data-countryCode="ML" value="223">Mali (+223)</option>
                                            <option data-countryCode="MT" value="356">Malta (+356)</option>
                                            <option data-countryCode="MH" value="692">Marshall Islands (+692)</option>
                                            <option data-countryCode="MQ" value="596">Martinique (+596)</option>
                                            <option data-countryCode="MR" value="222">Mauritania (+222)</option>
                                            <option data-countryCode="YT" value="269">Mayotte (+269)</option>
                                            <option data-countryCode="MX" value="52">Mexico (+52)</option>
                                            <option data-countryCode="FM" value="691">Micronesia (+691)</option>
                                            <option data-countryCode="MD" value="373">Moldova (+373)</option>
                                            <option data-countryCode="MC" value="377">Monaco (+377)</option>
                                            <option data-countryCode="MN" value="976">Mongolia (+976)</option>
                                            <option data-countryCode="MS" value="1664">Montserrat (+1664)</option>
                                            <option data-countryCode="MA" value="212">Morocco (+212)</option>
                                            <option data-countryCode="MZ" value="258">Mozambique (+258)</option>
                                            <option data-countryCode="MN" value="95">Myanmar (+95)</option>
                                            <option data-countryCode="NA" value="264">Namibia (+264)</option>
                                            <option data-countryCode="NR" value="674">Nauru (+674)</option>
                                            <option data-countryCode="NP" value="977">Nepal (+977)</option>
                                            <option data-countryCode="NL" value="31">Netherlands (+31)</option>
                                            <option data-countryCode="NC" value="687">New Caledonia (+687)</option>
                                            <option data-countryCode="NZ" value="64">New Zealand (+64)</option>
                                            <option data-countryCode="NI" value="505">Nicaragua (+505)</option>
                                            <option data-countryCode="NE" value="227">Niger (+227)</option>
                                            <option data-countryCode="NG" value="234">Nigeria (+234)</option>
                                            <option data-countryCode="NU" value="683">Niue (+683)</option>
                                            <option data-countryCode="NF" value="672">Norfolk Islands (+672)</option>
                                            <option data-countryCode="NP" value="670">Northern Marianas (+670)</option>
                                            <option data-countryCode="NO" value="47">Norway (+47)</option>
                                            <option data-countryCode="OM" value="968">Oman (+968)</option>
                                            <option data-countryCode="PW" value="680">Palau (+680)</option>
                                            <option data-countryCode="PA" value="507">Panama (+507)</option>
                                            <option data-countryCode="PG" value="675">Papua New Guinea (+675)</option>
                                            <option data-countryCode="PY" value="595">Paraguay (+595)</option>
                                            <option data-countryCode="PE" value="51">Peru (+51)</option>
                                            <option data-countryCode="PH" value="63">Philippines (+63)</option>
                                            <option data-countryCode="PL" value="48">Poland (+48)</option>
                                            <option data-countryCode="PT" value="351">Portugal (+351)</option>
                                            <option data-countryCode="PR" value="1787">Puerto Rico (+1787)</option>
                                            <option data-countryCode="QA" value="974">Qatar (+974)</option>
                                            <option data-countryCode="RE" value="262">Reunion (+262)</option>
                                            <option data-countryCode="RO" value="40">Romania (+40)</option>
                                            <option data-countryCode="RU" value="7">Russia (+7)</option>
                                            <option data-countryCode="RW" value="250">Rwanda (+250)</option>
                                            <option data-countryCode="SM" value="378">San Marino (+378)</option>
                                            <option data-countryCode="ST" value="239">Sao Tome &amp; Principe (+239)</option>
                                            <option data-countryCode="SA" value="966">Saudi Arabia (+966)</option>
                                            <option data-countryCode="SN" value="221">Senegal (+221)</option>
                                            <option data-countryCode="CS" value="381">Serbia (+381)</option>
                                            <option data-countryCode="SC" value="248">Seychelles (+248)</option>
                                            <option data-countryCode="SL" value="232">Sierra Leone (+232)</option>
                                            <option data-countryCode="SG" value="65">Singapore (+65)</option>
                                            <option data-countryCode="SK" value="421">Slovak Republic (+421)</option>
                                            <option data-countryCode="SI" value="386">Slovenia (+386)</option>
                                            <option data-countryCode="SB" value="677">Solomon Islands (+677)</option>
                                            <option data-countryCode="SO" value="252">Somalia (+252)</option>
                                            <option data-countryCode="ZA" value="27">South Africa (+27)</option>
                                            <option data-countryCode="ES" value="34">Spain (+34)</option>
                                            <option data-countryCode="LK" value="94">Sri Lanka (+94)</option>
                                            <option data-countryCode="SH" value="290">St. Helena (+290)</option>
                                            <option data-countryCode="KN" value="1869">St. Kitts (+1869)</option>
                                            <option data-countryCode="SC" value="1758">St. Lucia (+1758)</option>
                                            <option data-countryCode="SD" value="249">Sudan (+249)</option>
                                            <option data-countryCode="SR" value="597">Suriname (+597)</option>
                                            <option data-countryCode="SZ" value="268">Swaziland (+268)</option>
                                            <option data-countryCode="SE" value="46">Sweden (+46)</option>
                                            <option data-countryCode="CH" value="41">Switzerland (+41)</option>
                                            <option data-countryCode="SI" value="963">Syria (+963)</option>
                                            <option data-countryCode="TW" value="886">Taiwan (+886)</option>
                                            <option data-countryCode="TJ" value="7">Tajikstan (+7)</option>
                                            <option data-countryCode="TH" value="66">Thailand (+66)</option>
                                            <option data-countryCode="TG" value="228">Togo (+228)</option>
                                            <option data-countryCode="TO" value="676">Tonga (+676)</option>
                                            <option data-countryCode="TT" value="1868">Trinidad &amp; Tobago (+1868)</option>
                                            <option data-countryCode="TN" value="216">Tunisia (+216)</option>
                                            <option data-countryCode="TR" value="90">Turkey (+90)</option>
                                            <option data-countryCode="TM" value="7">Turkmenistan (+7)</option>
                                            <option data-countryCode="TM" value="993">Turkmenistan (+993)</option>
                                            <option data-countryCode="TC" value="1649">Turks &amp; Caicos Islands (+1649)</option>
                                            <option data-countryCode="TV" value="688">Tuvalu (+688)</option>
                                            <option data-countryCode="UG" value="256">Uganda (+256)</option>
                                            <option data-countryCode="GB" value="44">UK (+44)</option>
                                            <option data-countryCode="UA" value="380">Ukraine (+380)</option>
                                            <option data-countryCode="AE" value="971">United Arab Emirates (+971)</option>
                                            <option data-countryCode="UY" value="598">Uruguay (+598)</option>
                                            <option data-countryCode="US" value="1">USA (+1)</option>
                                            <option data-countryCode="UZ" value="7">Uzbekistan (+7)</option>
                                            <option data-countryCode="VU" value="678">Vanuatu (+678)</option>
                                            <option data-countryCode="VA" value="379">Vatican City (+379)</option>
                                            <option data-countryCode="VE" value="58">Venezuela (+58)</option>
                                            <option data-countryCode="VN" value="84">Vietnam (+84)</option>
                                            <option data-countryCode="VG" value="84">Virgin Islands - British (+1284)</option>
                                            <option data-countryCode="VI" value="84">Virgin Islands - US (+1340)</option>
                                            <option data-countryCode="WF" value="681">Wallis &amp; Futuna (+681)</option>
                                            <option data-countryCode="YE" value="969">Yemen (North)(+969)</option>
                                            <option data-countryCode="YE" value="967">Yemen (South)(+967)</option>
                                            <option data-countryCode="ZM" value="260">Zambia (+260)</option>
                                            <option data-countryCode="ZW" value="263">Zimbabwe (+263)</option>
                                        </optgroup>
                                    </select>
                                    <input
                                        type="text"
                                        placeholder={this.state.userDetails.phoneNumber}
                                        className={styles.pH}
                                        value={this.state.newPhoneNumber}
                                        onChange={(v) => { this.setState({ newPhoneNumber: v.target.value }) }} />
                                </div>
                                <div className={styles.button1} style={{ width: '30%' }} onClick={() => {
                                    if (this.state.newPhoneNumber.length == 0)
                                        this.setState({ error: true, errorMessage: 'Phone number must be valid' })
                                    else
                                        this.setState({ changePhoneLoader: true }, () => {
                                            axios.post(`https://us-central1-perch-01.cloudfunctions.net/checkIfPhoneNumberIsFree`, { phoneNumber: `+${this.state.countryCode}${this.state.newPhoneNumber}` })
                                                .then((r) => {
                                                    if (r.data) {
                                                        changeEmailOrPhoneNumber.call(this, 'phoneNumber', this.state.userDetails.userID, `+${this.state.countryCode}${this.state.newPhoneNumber}`, '');
                                                    }
                                                    else
                                                        this.setState({ error: true, errorMessage: 'Phone number already in use' })
                                                })
                                                .catch(error => {
                                                    this.setState({ error: true, errorMessage: error.message })
                                                })
                                        });
                                }}>
                                    {this.state.changePhoneLoader ?
                                        <Loader
                                            type="TailSpin"
                                            color={WHITE}
                                            height={'20px'}
                                            width={'20px'} /> :
                                        <p className={styles.buttonText1}>Change</p>}
                                </div>
                            </div>


                            {this.state.error ?
                                <Truncate lines={1} ellipsis={'...'} className={styles.em}>
                                    {this.state.errorMessage}
                                </Truncate> :
                                <></>}
                            {/* <a className={styles.button1} style={{ marginTop: this.state.error ? '0px' : '25px' }}
                                onClick={() => {
                                    if (!this.state.loading) {
                                        // Router.push('/s/db/udash').then(() => window.scrollTo(0, 0));
                                    }
                                }}
                            >
                                {this.state.loading ?
                                    <Loader
                                        type="TailSpin"
                                        color={WHITE}
                                        height={'20px'}
                                        width={'20px'} />
                                    : <p className={styles.buttonText1}>Change</p>
                                }
                            </a> */}
                            <a className={styles.fp_} onClick={() => { this.setState({ changeEmail_PhoneNumber: false, error: false }) }}><p className={styles.fp} style={{ color: 'red' }}>Cancel</p></a>
                            <p className={styles.cu_}>Running into an issue? <a href='/contact_us'><span className={styles.cu}>Contact us</span></a></p>
                            <p className={styles.ca}>Wrong account?</p>
                            <a className={styles.caC}
                                onClick={() => {
                                    this.setState({ email: '', password: '', displayVerification: false, isFlipped: false, changeEmail_PhoneNumber: false, error: false }, () => {
                                        signOut.call(this, true);
                                    });
                                }}>
                                <p className={styles.ca_}>Sign out</p>
                            </a>
                        </div>
                        :
                        this.state.displayVerification ?
                            <div className={styles.card}///SIGN IN
                            >
                                <a className={styles.logo} href='/'><Logo color={'#4EB848'} /></a>
                                <p style={{ marginBottom: '10px' }} className={styles.title}>Contact Verification</p>
                                <p className={styles.cvTitle} >Enter the verification code sent to the number <span style={{ color: "#4EB848", display: 'inline-block' }}>{this.state.userDetails.phoneNumber}</span></p>
                                <div className={styles.inputCont_}>
                                    <div className={styles.inputContHalf} style={{ width: '65%' }}>
                                        <CgKeyboard color={'#4EB848'} size={20} style={{ marginRight: '10px', marginLeft: '10px' }} />
                                        <input
                                            type="text"
                                            placeholder="Code"
                                            className={styles.pH}
                                            value={this.state.phoneVerificationCode}
                                            onChange={(event) => { this.setState({ phoneVerificationCode: event.target.value }) }}
                                        />
                                    </div>
                                    <div className={styles.button1} style={{ width: '30%' }} onClick={() => {
                                        if (!this.state.verificationPhoneLoader) {
                                            if (this.state.phoneVerificationCode.length != 6)
                                                this.setState({ errorMessage: 'Code must be exactly 6 digits long', error: true })
                                            else
                                                this.setState({ verificationPhoneLoader: true }, () => {
                                                    sendVerification.call(this, this.state.userDetails.userID, 'phoneNumber', 'check', this.state.phoneVerificationCode, this.state.userDetails.phoneNumber, this.state.userDetails.email, this.state.userDetails.firstName,);
                                                })
                                        }
                                    }}>
                                        {this.state.verificationPhoneLoader ?
                                            <Loader
                                                type="TailSpin"
                                                color={WHITE}
                                                height={'20px'}
                                                width={'20px'} /> :
                                            <p className={styles.buttonText1}>Verify</p>}
                                    </div>
                                </div>

                                {this.state.phoneNumberTimer == 0 ?
                                    <p className={styles.cvTitle} >Didnt get the code yet? <span onClick={() => {
                                        if (!this.state.verificationPhoneLoader)
                                            this.resend('phoneNumber')
                                    }} className={styles.cursor} style={{ color: "#005BEA", display: 'inline', fontFamily: 'Gilroy-Medium' }}>Resend</span></p> :
                                    <p className={styles.cvTitle}>Resend in<span style={{ color: "#005BEA", display: 'inline', fontFamily: 'Gilroy-Medium' }}>{` 0:${('0' + this.state.phoneNumberTimer).slice(-2)}`}</span></p>
                                }

                                {this.state.error ?
                                    <Truncate lines={1} ellipsis={'...'} className={styles.em}>
                                        {this.state.errorMessage}
                                    </Truncate> :
                                    <></>}
                                {/* <a className={styles.button1} style={{ marginTop: this.state.error ? '0px' : '25px' }}
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
                                </a> */}
                                <a className={styles.fp_} onClick={() => { this.setState({ changeEmail_PhoneNumber: true, error: false }) }}><p className={styles.fp}>Change phone number or email</p></a>
                                <p className={styles.cu_}>Running into an issue? <a href='/contact_us'><span className={styles.cu}>Contact us</span></a></p>
                                <p className={styles.ca}>Wrong account?</p>
                                <a className={styles.caC}
                                    onClick={() => {
                                        this.setState({ email: '', password: '', displayVerification: false, isFlipped: false, changeEmail_PhoneNumber: false, error: false }, () => {
                                            signOut.call(this, true);
                                        });

                                    }}>
                                    <p className={styles.ca_}>Sign out</p>
                                </a>
                            </div>
                            :
                            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal" cardZIndex={2} containerStyle={{ marginRight: '5vw' }}>
                                <div className={styles.card}///SIGN IN
                                    id={styles.card_}
                                //style={{ marginRight: '0px' }}
                                >
                                    <a className={styles.logo} href='/'><Logo color={'#4EB848'} /></a>
                                    {this.state.forgotPassword ?
                                        <>
                                            <p className={styles.title}>Forgot Password</p>

                                            <div className={styles.inputCont}>
                                                <FaEnvelope color={'#4EB848'} className={styles.env} />
                                                <input
                                                    type="text"
                                                    placeholder="Enter your email"
                                                    className={styles.pH}
                                                    value={this.state.email}
                                                    onChange={(event) => { this.setState({ email: event.target.value }) }}
                                                />
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
                                                        else
                                                            sendPasswordResetLink.call(this, this.state.email);
                                                    }
                                                }}>
                                                {this.state.loading ?
                                                    <Loader
                                                        type="TailSpin"
                                                        color={WHITE}
                                                        height={'20px'}
                                                        width={'20px'} /> :
                                                    <p className={styles.buttonText1}>Send password reset link</p>
                                                }
                                            </a>
                                            <a className={styles.fp_} onClick={() => { this.setState({ forgotPassword: false, errorMessage: '', error: false }) }}><p className={styles.fp}>Go back</p></a>
                                            <p className={styles.cu_}>Running into an issue? <a href='/contact_us'><span className={styles.cu}>Contact us</span></a></p>
                                            <p className={styles.ca}>Don't have an account</p>
                                            <a className={styles.caC}
                                                onClick={() => {
                                                    this.setState({ isFlipped: !this.state.isFlipped, error: false, errorMessage: '', }, () => {
                                                        this.setState({ forgotPassword: false, })
                                                    })
                                                }}>
                                                <p className={styles.ca_}>Create a new account</p>
                                            </a></> : <>
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
                                            <a className={styles.fp_} onClick={() => { this.setState({ forgotPassword: true, errorMessage: '', error: false }) }}><p className={styles.fp}>Forgot password?</p></a>
                                            <p className={styles.cu_}>Running into an issue? <a href='/contact_us'><span className={styles.cu}>Contact us</span></a></p>
                                            <p className={styles.ca}>Don't have an account</p>
                                            <a className={styles.caC}
                                                onClick={() => { this.setState({ isFlipped: !this.state.isFlipped, error: false }) }}>
                                                <p className={styles.ca_}>Create a new account</p>
                                            </a>
                                        </>}
                                </div>

                                <div className={styles.card}//SIGN UP
                                    //style={{ marginRight: '0px' }}
                                    id={styles.card_}
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

                                        <select
                                            value={`+${this.state.countryCode}`}
                                            className={styles.countryCodeBox}
                                            onChange={(v) => {
                                                this.setState({
                                                    countryCode: v.target.value,
                                                })
                                            }}
                                        >
                                            <option value="" style={{ display: 'none' }}>{`+${this.state.countryCode}`}</option>
                                            <option data-countryCode="CA" value="1">Canada (+1)</option>
                                            <optgroup label="Other countries">
                                                <option data-countryCode="DZ" value="213">Algeria (+213)</option>
                                                <option data-countryCode="AD" value="376">Andorra (+376)</option>
                                                <option data-countryCode="AO" value="244">Angola (+244)</option>
                                                <option data-countryCode="AI" value="1264">Anguilla (+1264)</option>
                                                <option data-countryCode="AG" value="1268">Antigua &amp; Barbuda (+1268)</option>
                                                <option data-countryCode="AR" value="54">Argentina (+54)</option>
                                                <option data-countryCode="AM" value="374">Armenia (+374)</option>
                                                <option data-countryCode="AW" value="297">Aruba (+297)</option>
                                                <option data-countryCode="AU" value="61">Australia (+61)</option>
                                                <option data-countryCode="AT" value="43">Austria (+43)</option>
                                                <option data-countryCode="AZ" value="994">Azerbaijan (+994)</option>
                                                <option data-countryCode="BS" value="1242">Bahamas (+1242)</option>
                                                <option data-countryCode="BH" value="973">Bahrain (+973)</option>
                                                <option data-countryCode="BD" value="880">Bangladesh (+880)</option>
                                                <option data-countryCode="BB" value="1246">Barbados (+1246)</option>
                                                <option data-countryCode="BY" value="375">Belarus (+375)</option>
                                                <option data-countryCode="BE" value="32">Belgium (+32)</option>
                                                <option data-countryCode="BZ" value="501">Belize (+501)</option>
                                                <option data-countryCode="BJ" value="229">Benin (+229)</option>
                                                <option data-countryCode="BM" value="1441">Bermuda (+1441)</option>
                                                <option data-countryCode="BT" value="975">Bhutan (+975)</option>
                                                <option data-countryCode="BO" value="591">Bolivia (+591)</option>
                                                <option data-countryCode="BA" value="387">Bosnia Herzegovina (+387)</option>
                                                <option data-countryCode="BW" value="267">Botswana (+267)</option>
                                                <option data-countryCode="BR" value="55">Brazil (+55)</option>
                                                <option data-countryCode="BN" value="673">Brunei (+673)</option>
                                                <option data-countryCode="BG" value="359">Bulgaria (+359)</option>
                                                <option data-countryCode="BF" value="226">Burkina Faso (+226)</option>
                                                <option data-countryCode="BI" value="257">Burundi (+257)</option>
                                                <option data-countryCode="KH" value="855">Cambodia (+855)</option>
                                                <option data-countryCode="CM" value="237">Cameroon (+237)</option>
                                                <option data-countryCode="CA" value="1">Canada (+1)</option>
                                                <option data-countryCode="CV" value="238">Cape Verde Islands (+238)</option>
                                                <option data-countryCode="KY" value="1345">Cayman Islands (+1345)</option>
                                                <option data-countryCode="CF" value="236">Central African Republic (+236)</option>
                                                <option data-countryCode="CL" value="56">Chile (+56)</option>
                                                <option data-countryCode="CN" value="86">China (+86)</option>
                                                <option data-countryCode="CO" value="57">Colombia (+57)</option>
                                                <option data-countryCode="KM" value="269">Comoros (+269)</option>
                                                <option data-countryCode="CG" value="242">Congo (+242)</option>
                                                <option data-countryCode="CK" value="682">Cook Islands (+682)</option>
                                                <option data-countryCode="CR" value="506">Costa Rica (+506)</option>
                                                <option data-countryCode="HR" value="385">Croatia (+385)</option>
                                                <option data-countryCode="CU" value="53">Cuba (+53)</option>
                                                <option data-countryCode="CY" value="90392">Cyprus North (+90392)</option>
                                                <option data-countryCode="CY" value="357">Cyprus South (+357)</option>
                                                <option data-countryCode="CZ" value="42">Czech Republic (+42)</option>
                                                <option data-countryCode="DK" value="45">Denmark (+45)</option>
                                                <option data-countryCode="DJ" value="253">Djibouti (+253)</option>
                                                <option data-countryCode="DM" value="1809">Dominica (+1809)</option>
                                                <option data-countryCode="DO" value="1809">Dominican Republic (+1809)</option>
                                                <option data-countryCode="EC" value="593">Ecuador (+593)</option>
                                                <option data-countryCode="EG" value="20">Egypt (+20)</option>
                                                <option data-countryCode="SV" value="503">El Salvador (+503)</option>
                                                <option data-countryCode="GQ" value="240">Equatorial Guinea (+240)</option>
                                                <option data-countryCode="ER" value="291">Eritrea (+291)</option>
                                                <option data-countryCode="EE" value="372">Estonia (+372)</option>
                                                <option data-countryCode="ET" value="251">Ethiopia (+251)</option>
                                                <option data-countryCode="FK" value="500">Falkland Islands (+500)</option>
                                                <option data-countryCode="FO" value="298">Faroe Islands (+298)</option>
                                                <option data-countryCode="FJ" value="679">Fiji (+679)</option>
                                                <option data-countryCode="FI" value="358">Finland (+358)</option>
                                                <option data-countryCode="FR" value="33">France (+33)</option>
                                                <option data-countryCode="GF" value="594">French Guiana (+594)</option>
                                                <option data-countryCode="PF" value="689">French Polynesia (+689)</option>
                                                <option data-countryCode="GA" value="241">Gabon (+241)</option>
                                                <option data-countryCode="GM" value="220">Gambia (+220)</option>
                                                <option data-countryCode="GE" value="7880">Georgia (+7880)</option>
                                                <option data-countryCode="DE" value="49">Germany (+49)</option>
                                                <option data-countryCode="GH" value="233">Ghana (+233)</option>
                                                <option data-countryCode="GI" value="350">Gibraltar (+350)</option>
                                                <option data-countryCode="GR" value="30">Greece (+30)</option>
                                                <option data-countryCode="GL" value="299">Greenland (+299)</option>
                                                <option data-countryCode="GD" value="1473">Grenada (+1473)</option>
                                                <option data-countryCode="GP" value="590">Guadeloupe (+590)</option>
                                                <option data-countryCode="GU" value="671">Guam (+671)</option>
                                                <option data-countryCode="GT" value="502">Guatemala (+502)</option>
                                                <option data-countryCode="GN" value="224">Guinea (+224)</option>
                                                <option data-countryCode="GW" value="245">Guinea - Bissau (+245)</option>
                                                <option data-countryCode="GY" value="592">Guyana (+592)</option>
                                                <option data-countryCode="HT" value="509">Haiti (+509)</option>
                                                <option data-countryCode="HN" value="504">Honduras (+504)</option>
                                                <option data-countryCode="HK" value="852">Hong Kong (+852)</option>
                                                <option data-countryCode="HU" value="36">Hungary (+36)</option>
                                                <option data-countryCode="IS" value="354">Iceland (+354)</option>
                                                <option data-countryCode="IN" value="91">India (+91)</option>
                                                <option data-countryCode="ID" value="62">Indonesia (+62)</option>
                                                <option data-countryCode="IR" value="98">Iran (+98)</option>
                                                <option data-countryCode="IQ" value="964">Iraq (+964)</option>
                                                <option data-countryCode="IE" value="353">Ireland (+353)</option>
                                                <option data-countryCode="IL" value="972">Israel (+972)</option>
                                                <option data-countryCode="IT" value="39">Italy (+39)</option>
                                                <option data-countryCode="JM" value="1876">Jamaica (+1876)</option>
                                                <option data-countryCode="JP" value="81">Japan (+81)</option>
                                                <option data-countryCode="JO" value="962">Jordan (+962)</option>
                                                <option data-countryCode="KZ" value="7">Kazakhstan (+7)</option>
                                                <option data-countryCode="KE" value="254">Kenya (+254)</option>
                                                <option data-countryCode="KI" value="686">Kiribati (+686)</option>
                                                <option data-countryCode="KP" value="850">Korea North (+850)</option>
                                                <option data-countryCode="KR" value="82">Korea South (+82)</option>
                                                <option data-countryCode="KW" value="965">Kuwait (+965)</option>
                                                <option data-countryCode="KG" value="996">Kyrgyzstan (+996)</option>
                                                <option data-countryCode="LA" value="856">Laos (+856)</option>
                                                <option data-countryCode="LV" value="371">Latvia (+371)</option>
                                                <option data-countryCode="LB" value="961">Lebanon (+961)</option>
                                                <option data-countryCode="LS" value="266">Lesotho (+266)</option>
                                                <option data-countryCode="LR" value="231">Liberia (+231)</option>
                                                <option data-countryCode="LY" value="218">Libya (+218)</option>
                                                <option data-countryCode="LI" value="417">Liechtenstein (+417)</option>
                                                <option data-countryCode="LT" value="370">Lithuania (+370)</option>
                                                <option data-countryCode="LU" value="352">Luxembourg (+352)</option>
                                                <option data-countryCode="MO" value="853">Macao (+853)</option>
                                                <option data-countryCode="MK" value="389">Macedonia (+389)</option>
                                                <option data-countryCode="MG" value="261">Madagascar (+261)</option>
                                                <option data-countryCode="MW" value="265">Malawi (+265)</option>
                                                <option data-countryCode="MY" value="60">Malaysia (+60)</option>
                                                <option data-countryCode="MV" value="960">Maldives (+960)</option>
                                                <option data-countryCode="ML" value="223">Mali (+223)</option>
                                                <option data-countryCode="MT" value="356">Malta (+356)</option>
                                                <option data-countryCode="MH" value="692">Marshall Islands (+692)</option>
                                                <option data-countryCode="MQ" value="596">Martinique (+596)</option>
                                                <option data-countryCode="MR" value="222">Mauritania (+222)</option>
                                                <option data-countryCode="YT" value="269">Mayotte (+269)</option>
                                                <option data-countryCode="MX" value="52">Mexico (+52)</option>
                                                <option data-countryCode="FM" value="691">Micronesia (+691)</option>
                                                <option data-countryCode="MD" value="373">Moldova (+373)</option>
                                                <option data-countryCode="MC" value="377">Monaco (+377)</option>
                                                <option data-countryCode="MN" value="976">Mongolia (+976)</option>
                                                <option data-countryCode="MS" value="1664">Montserrat (+1664)</option>
                                                <option data-countryCode="MA" value="212">Morocco (+212)</option>
                                                <option data-countryCode="MZ" value="258">Mozambique (+258)</option>
                                                <option data-countryCode="MN" value="95">Myanmar (+95)</option>
                                                <option data-countryCode="NA" value="264">Namibia (+264)</option>
                                                <option data-countryCode="NR" value="674">Nauru (+674)</option>
                                                <option data-countryCode="NP" value="977">Nepal (+977)</option>
                                                <option data-countryCode="NL" value="31">Netherlands (+31)</option>
                                                <option data-countryCode="NC" value="687">New Caledonia (+687)</option>
                                                <option data-countryCode="NZ" value="64">New Zealand (+64)</option>
                                                <option data-countryCode="NI" value="505">Nicaragua (+505)</option>
                                                <option data-countryCode="NE" value="227">Niger (+227)</option>
                                                <option data-countryCode="NG" value="234">Nigeria (+234)</option>
                                                <option data-countryCode="NU" value="683">Niue (+683)</option>
                                                <option data-countryCode="NF" value="672">Norfolk Islands (+672)</option>
                                                <option data-countryCode="NP" value="670">Northern Marianas (+670)</option>
                                                <option data-countryCode="NO" value="47">Norway (+47)</option>
                                                <option data-countryCode="OM" value="968">Oman (+968)</option>
                                                <option data-countryCode="PW" value="680">Palau (+680)</option>
                                                <option data-countryCode="PA" value="507">Panama (+507)</option>
                                                <option data-countryCode="PG" value="675">Papua New Guinea (+675)</option>
                                                <option data-countryCode="PY" value="595">Paraguay (+595)</option>
                                                <option data-countryCode="PE" value="51">Peru (+51)</option>
                                                <option data-countryCode="PH" value="63">Philippines (+63)</option>
                                                <option data-countryCode="PL" value="48">Poland (+48)</option>
                                                <option data-countryCode="PT" value="351">Portugal (+351)</option>
                                                <option data-countryCode="PR" value="1787">Puerto Rico (+1787)</option>
                                                <option data-countryCode="QA" value="974">Qatar (+974)</option>
                                                <option data-countryCode="RE" value="262">Reunion (+262)</option>
                                                <option data-countryCode="RO" value="40">Romania (+40)</option>
                                                <option data-countryCode="RU" value="7">Russia (+7)</option>
                                                <option data-countryCode="RW" value="250">Rwanda (+250)</option>
                                                <option data-countryCode="SM" value="378">San Marino (+378)</option>
                                                <option data-countryCode="ST" value="239">Sao Tome &amp; Principe (+239)</option>
                                                <option data-countryCode="SA" value="966">Saudi Arabia (+966)</option>
                                                <option data-countryCode="SN" value="221">Senegal (+221)</option>
                                                <option data-countryCode="CS" value="381">Serbia (+381)</option>
                                                <option data-countryCode="SC" value="248">Seychelles (+248)</option>
                                                <option data-countryCode="SL" value="232">Sierra Leone (+232)</option>
                                                <option data-countryCode="SG" value="65">Singapore (+65)</option>
                                                <option data-countryCode="SK" value="421">Slovak Republic (+421)</option>
                                                <option data-countryCode="SI" value="386">Slovenia (+386)</option>
                                                <option data-countryCode="SB" value="677">Solomon Islands (+677)</option>
                                                <option data-countryCode="SO" value="252">Somalia (+252)</option>
                                                <option data-countryCode="ZA" value="27">South Africa (+27)</option>
                                                <option data-countryCode="ES" value="34">Spain (+34)</option>
                                                <option data-countryCode="LK" value="94">Sri Lanka (+94)</option>
                                                <option data-countryCode="SH" value="290">St. Helena (+290)</option>
                                                <option data-countryCode="KN" value="1869">St. Kitts (+1869)</option>
                                                <option data-countryCode="SC" value="1758">St. Lucia (+1758)</option>
                                                <option data-countryCode="SD" value="249">Sudan (+249)</option>
                                                <option data-countryCode="SR" value="597">Suriname (+597)</option>
                                                <option data-countryCode="SZ" value="268">Swaziland (+268)</option>
                                                <option data-countryCode="SE" value="46">Sweden (+46)</option>
                                                <option data-countryCode="CH" value="41">Switzerland (+41)</option>
                                                <option data-countryCode="SI" value="963">Syria (+963)</option>
                                                <option data-countryCode="TW" value="886">Taiwan (+886)</option>
                                                <option data-countryCode="TJ" value="7">Tajikstan (+7)</option>
                                                <option data-countryCode="TH" value="66">Thailand (+66)</option>
                                                <option data-countryCode="TG" value="228">Togo (+228)</option>
                                                <option data-countryCode="TO" value="676">Tonga (+676)</option>
                                                <option data-countryCode="TT" value="1868">Trinidad &amp; Tobago (+1868)</option>
                                                <option data-countryCode="TN" value="216">Tunisia (+216)</option>
                                                <option data-countryCode="TR" value="90">Turkey (+90)</option>
                                                <option data-countryCode="TM" value="7">Turkmenistan (+7)</option>
                                                <option data-countryCode="TM" value="993">Turkmenistan (+993)</option>
                                                <option data-countryCode="TC" value="1649">Turks &amp; Caicos Islands (+1649)</option>
                                                <option data-countryCode="TV" value="688">Tuvalu (+688)</option>
                                                <option data-countryCode="UG" value="256">Uganda (+256)</option>
                                                <option data-countryCode="GB" value="44">UK (+44)</option>
                                                <option data-countryCode="UA" value="380">Ukraine (+380)</option>
                                                <option data-countryCode="AE" value="971">United Arab Emirates (+971)</option>
                                                <option data-countryCode="UY" value="598">Uruguay (+598)</option>
                                                <option data-countryCode="US" value="1">USA (+1)</option>
                                                <option data-countryCode="UZ" value="7">Uzbekistan (+7)</option>
                                                <option data-countryCode="VU" value="678">Vanuatu (+678)</option>
                                                <option data-countryCode="VA" value="379">Vatican City (+379)</option>
                                                <option data-countryCode="VE" value="58">Venezuela (+58)</option>
                                                <option data-countryCode="VN" value="84">Vietnam (+84)</option>
                                                <option data-countryCode="VG" value="84">Virgin Islands - British (+1284)</option>
                                                <option data-countryCode="VI" value="84">Virgin Islands - US (+1340)</option>
                                                <option data-countryCode="WF" value="681">Wallis &amp; Futuna (+681)</option>
                                                <option data-countryCode="YE" value="969">Yemen (North)(+969)</option>
                                                <option data-countryCode="YE" value="967">Yemen (South)(+967)</option>
                                                <option data-countryCode="ZM" value="260">Zambia (+260)</option>
                                                <option data-countryCode="ZW" value="263">Zimbabwe (+263)</option>
                                            </optgroup>
                                        </select>

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
                                    <div className={styles.inputCont}>
                                        <input
                                            type="text"
                                            placeholder="Referral code ( Optional )"
                                            className={styles.pH_}
                                            value={this.state.referralCode}
                                            onChange={(event) => { this.setState({ referralCode: event.target.value }) }}
                                        />
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
                                                        this.state.countryCode,
                                                        this.state.phoneNumber,
                                                        this.state.password1,
                                                        false,
                                                        this.state.referralCode,
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
                                    <p style={{ marginTop: '10px' }} className={styles.cu_}>Running into an issue? <a href='/contact_us'><span className={styles.cu}>Contact us</span></a></p>
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