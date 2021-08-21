module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ({

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("iaUL");


/***/ }),

/***/ "2Hsl":
/***/ (function(module, exports) {

module.exports = require("react-loader-spinner");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5mtF":
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "5t/q":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "layout_container__29YVR",
	"img": "layout_img__3Ymky",
	"card": "layout_card__1jeH-",
	"card_": "layout_card___1m4Ck",
	"logo": "layout_logo__17D_F",
	"title": "layout_title__2Oz9l",
	"cvTitle": "layout_cvTitle__2otaP",
	"inputCont": "layout_inputCont__f9zRp",
	"inputContHalf": "layout_inputContHalf__gUpLv",
	"inputCont_": "layout_inputCont___2FW_N",
	"inputCont_d": "layout_inputCont_d__1OgBw",
	"pH": "layout_pH__2qyue",
	"pH_": "layout_pH___1VNHZ",
	"countryCodeBox": "layout_countryCodeBox__33KVH",
	"env": "layout_env__XCYrf",
	"pad": "layout_pad__hnDkK",
	"cursor": "layout_cursor__1ARD_",
	"eye": "layout_eye__1d8l_",
	"button1": "layout_button1__S7vYQ",
	"cu": "layout_cu__3zghp",
	"ca_": "layout_ca___2gek6",
	"fp": "layout_fp__3eRQ3",
	"em": "layout_em__10CNm",
	"fp_": "layout_fp___2YPHg",
	"buttonText1": "layout_buttonText1__3o2T-",
	"cu_": "layout_cu___1LU0V",
	"ca": "layout_ca__2qcjz",
	"caC": "layout_caC__3-54M"
};


/***/ }),

/***/ "68mg":
/***/ (function(module, exports) {

module.exports = require("react-card-flip");

/***/ }),

/***/ "7v8O":
/***/ (function(module, exports) {

module.exports = require("react-icons/bs");

/***/ }),

/***/ "9uY5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return signIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return adminSignIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return signUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return signOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return sendVerification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return changeEmailOrPhoneNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return sendFeedback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return changePassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return deleteAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return sendPasswordResetLink; });
/* unused harmony export sendEmail */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return resetPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return validateVehicle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return replyFeedback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return sendUserEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return validateDriver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return makeid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return driverApplicationAdvance; });
/* unused harmony export getDate */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return dateformat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return polylineLenght; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return timeAndDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return distanceCalculator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return emailFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return dateOfQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return colors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return deleteCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return storeCard; });
/* unused harmony export buyKilometers */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return formatDateAllValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return millisToMinutesAndSeconds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return cancelledTripResolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return pendingProcessesFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return pendingProcessesFunctionDelete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return adminDeleteUser; });
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pNaP");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function signIn(email, password, type) {
  this.setState({
    error: false,
    errorMessage: '',
    loading: true
  }, () => {
    firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth().setPersistence(firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth.Auth.Persistence.LOCAL).then(() => {
      firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth().signInWithEmailAndPassword(email, password).then(() => {
        if (type == 'user') {
          const userID = firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth().currentUser.uid;
          firebase__WEBPACK_IMPORTED_MODULE_0___default.a.database().ref(`users/${userID}`).once('value', snapshot => {
            if (snapshot.val().summarizedHistory.phoneVerified == true) next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/s/db/udash').then(() => window.scrollTo(0, 0));else this.setState({
              displayVerification: true,
              loading: false,
              userDetails: snapshot.val(),
              error: false
            }, () => {
              //send a verification phonenumber
              sendVerification(userID, 'phoneNumber', 'storeAndSend', 'nocode', snapshot.val().phoneNumber, snapshot.val().email, snapshot.val().firstName);
              firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth().signOut().catch(error => {
                console.log(error.message);
              });
            });
          }).catch(error => {
            this.setState({
              error: true,
              errorMessage: error.message,
              loading: false
            });
          });
        } else if (type == 'driver') {
          const userID = firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth().currentUser.uid;
          firebase__WEBPACK_IMPORTED_MODULE_0___default.a.database().ref(`users/${userID}`).once('value', snapshot => {
            if (snapshot.val().summarizedHistory.phoneVerified == true && snapshot.val().summarizedHistory.emailVerified == true) firebase__WEBPACK_IMPORTED_MODULE_0___default.a.database().ref(`users/${userID}/driverVerified`).once('value', snap => {
              if (snap.val() == 'VERIFIED') next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/s/db/ddash').then(() => window.scrollTo(0, 0));else next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/s/db/d_app_dash').then(() => window.scrollTo(0, 0));
            }).catch(error => {
              console.log(error.message);
            });else {
              this.setState({
                displayVerification: true,
                loading: false,
                userDetails: snapshot.val(),
                phoneVerified: snapshot.val().summarizedHistory.phoneVerified,
                emailVerified: snapshot.val().summarizedHistory.emailVerified,
                error: false
              }, () => {
                //send an email or phonenumber verification
                if (!snapshot.val().summarizedHistory.phoneVerified) sendVerification(userID, 'phoneNumber', 'storeAndSend', 'nocode', snapshot.val().phoneNumber, snapshot.val().email, snapshot.val().firstName);
                if (!snapshot.val().summarizedHistory.emailVerified) sendVerification(userID, 'email', 'storeAndSend', 'nocode', snapshot.val().phoneNumber, snapshot.val().email, snapshot.val().firstName);
                firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth().signOut().catch(error => {
                  console.log(error.message);
                });
              });
            }
          }).catch(error => {
            console.log(error.message);
          });
        }
      }).catch(error => {
        this.setState({
          error: true,
          errorMessage: error.message,
          loading: false
        });
      });
    }).catch(error => {
      this.setState({
        error: true,
        errorMessage: error.message,
        loading: false
      });
    });
  });
}
;
function adminSignIn(email, password) {
  this.setState({
    error: false,
    errorMessage: '',
    loading: true
  }, () => {
    firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth().setPersistence(firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth.Auth.Persistence.LOCAL).then(() => {
      firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth().signInWithEmailAndPassword(email, password).then(() => {
        const userID = firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth().currentUser.uid;
        firebase__WEBPACK_IMPORTED_MODULE_0___default.a.database().ref(`adminAuthorized/${userID}`).once('value', snapshot => {
          if (snapshot.val()) next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/admin/dash').then(() => window.scrollTo(0, 0));else this.setState({
            error: true,
            errorMessage: 'You do not have access to this portion of the site. Please contact us for help. Excess unauthorized logins might result in an IP block.',
            loading: false
          }, () => {
            firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth().signOut().catch(error => {
              console.log(error.message);
            });
          });
        }).catch(error => {
          console.log(error.message);
        });
      }).catch(error => {
        this.setState({
          error: true,
          errorMessage: error.message,
          loading: false
        });
      });
    }).catch(error => {
      this.setState({
        error: true,
        errorMessage: error.message,
        loading: false
      });
    });
  });
}
;
function signUp(firstName, lastName, email, countryCode, phoneNumber, password, isDriver, referralCode) {
  this.setState({
    error: false,
    errorMessage: '',
    loading: true
  }, () => {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(`https://us-central1-perch-01.cloudfunctions.net/checkIfPhoneNumberIsFree`, {
      phoneNumber: `+${countryCode}${phoneNumber}`
    }).then(r => {
      if (r.data) {
        firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth().createUserWithEmailAndPassword(email, password).then(() => {
          const userID = firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth().currentUser.uid;
          axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('https://us-central1-perch-01.cloudfunctions.net/createUserDetails', {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: `+${countryCode}${phoneNumber}`,
            userID: userID,
            isDriver: isDriver,
            referralCode: referralCode
          }).then(() => {
            firebase__WEBPACK_IMPORTED_MODULE_0___default.a.database().ref(`users/${userID}`).once('value', snapshot => {
              firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth().signOut().catch(error => {
                console.log(error.message);
              });
              this.setState({
                displayVerification: true,
                loading: false,
                error: false,
                userDetails: snapshot.val()
              });
            }).catch(error => {
              this.setState({
                error: true,
                errorMessage: error.message
              });
            });
          }).catch(error => {
            this.setState({
              errorMessage: error.message,
              loading: false
            });
          });
        }).catch(error => {
          this.setState({
            error: true,
            errorMessage: error.message,
            loading: false
          });
        });
      } else this.setState({
        error: true,
        errorMessage: 'This phone number is currently registered with another account, contact us for help',
        loading: false
      });
    }).catch(error => {
      this.setState({
        error: true,
        errorMessage: error.message,
        loading: false
      });
    });
  });
}
;
function signOut(doNotReroute) {
  firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth().signOut().then(() => {
    if (!doNotReroute) next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/');
  }).catch(error => {
    console.log(error.message);
  });
}
;
function sendVerification(userID, type, action, code, phoneNumber, email, name) {
  axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(`https://us-central1-perch-01.cloudfunctions.net/sendVerificationCode`, {
    userID: userID,
    type: type,
    action: action,
    code: code,
    phoneNumber: phoneNumber,
    email: email,
    name: name
  }).then(r => {
    const result = r.data;

    if (action == 'check') {
      if (result) {
        if (type == 'phoneNumber') this.setState({
          phoneVerified: true,
          verificationPhoneLoader: false
        });else if (type == 'email') this.setState({
          emailVerified: true,
          verificationEmailLoader: false
        });
      } else {
        if (type == 'phoneNumber') this.setState({
          verificationPhoneLoader: false
        });else if (type == 'email') this.setState({
          verificationEmailLoader: false
        });
        this.setState({
          error: true,
          errorMessage: 'The verification code was not correct. Please check again or click resend.'
        });
      }
    }
  }); //.catch((error) => { this.setState({ error: true, errorMessage: error.message }) })
}
;
function changeEmailOrPhoneNumber(type, userID, phoneNumber, email) {
  axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(`https://us-central1-perch-01.cloudfunctions.net/changeEmailOrPhoneNumber`, {
    userID: userID,
    email: email,
    type: type,
    phoneNumber: phoneNumber
  }).then(r => {
    this.setState({
      userDetails: r.data,
      changeEmail_PhoneNumber: false,
      error: false,
      errorMessage: '',
      changeEmailLoader: false,
      changePhoneLoader: false
    });
  }).catch(error => {
    this.setState({
      error: true,
      errorMessage: `${error.message}, this field might already be in use by another user`
    });
  });
}
;
function sendFeedback() {
  if (this.state.topic == 'unselected') this.setState({
    errorMessage: 'A topic is needed. Please pick a topic to contact us about. If you do not have one, please pick "Other"'
  });else if (this.state.message == '') this.setState({
    errorMessage: 'Please enter a message'
  });else {
    this.setState({
      loading: true
    }, () => {
      if (this.state.userDetails) {
        const ref = this.state.userDetails.driverID ? `driverFeedback/${this.state.userDetails.driverID}` : `userFeedback/${this.state.userDetails.userID}`;
        firebase__WEBPACK_IMPORTED_MODULE_0___default.a.database().ref(ref).update({
          [new Date().getTime()]: {
            body: this.state.message,
            subject: this.state.topic,
            status: 'UNPROCESSED',
            date: getDate(),
            timestamp: new Date().getTime()
          }
        }).then(() => {
          this.setState({
            topic: 'unselected',
            message: '',
            loading: false
          }, () => {
            this.loadResult();
          });
        }).catch(error => {
          console.log(error.message);
        });
      } else axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(`https://us-central1-perch-01.cloudfunctions.net/guestSendFeedback`, {
        body: this.state.message,
        subject: this.state.topic,
        status: 'UNPROCESSED',
        date: getDate(),
        email: this.state.userEmail,
        timestamp: new Date().getTime(),
        nonUser: true,
        case: 'send'
      }).then(() => {
        this.setState({
          topic: 'unselected',
          message: '',
          loading: false
        });
      }).catch(error => {
        console.log(error.message);
      });
    });
  }
}
;
function changePassword(email_, oldPassword, newPassword) {
  this.setState({
    loading: true
  }, () => {
    const email = email_;
    const password = oldPassword;
    firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth().signInWithEmailAndPassword(email, password).then(() => {
      firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth().currentUser.updatePassword(newPassword).then(() => {
        this.setState({
          loading: false,
          toShow: 'default',
          currentPassword: '',
          newPassword: '',
          confirmNewPassword: ''
        });
      }).catch(error => this.setState({
        errorMessage: error.message,
        loading: false,
        newPassword: '',
        confirmNewPassword: ''
      }));
    }).catch(error => this.setState({
      errorMessage: error.message,
      loading: false,
      newPassword: '',
      confirmNewPassword: ''
    }));
  });
}
;
function deleteAccount(email, password) {
  this.setState({
    loading: true
  }, () => {
    firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth().signInWithEmailAndPassword(email, password).then(() => {
      const user = firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth().currentUser;
      const userID = user.uid;
      user.delete().then(() => {
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(`https://us-central1-perch-01.cloudfunctions.net/deleteUser`, {
          deleteAccountReason: this.state.deleteAccountReason,
          userDetails: this.state.userDetails
        }).catch(error => {
          alert(error.message);
        });
      }).catch(error => this.setState({
        errorMessage: error.message,
        loading: false,
        password1: ''
      }));
    }).catch(error => this.setState({
      errorMessage: error.message,
      loading: false,
      password1: ''
    }));
  });
}
;
function sendPasswordResetLink(email) {
  firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth().sendPasswordResetEmail(email).then(() => {
    this.setState({
      error: false,
      errorMessage: '',
      forgotPassword: false
    });
  }).catch(error => {
    this.setState({
      error: true,
      errorMessage: error.message
    });
  });
}
;
function sendEmail(name, email, type, subject) {
  axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(`https://us-central1-perch-01.cloudfunctions.net/sendVerificationEmail`, {
    name: name,
    email: email,
    type: type,
    subject: subject
  }).catch(error => {
    console.log(error.message);
  });
}
;
function resetPassword(code, newPassword, email) {
  this.setState({
    errorMessage: '',
    loading: true
  }, () => {
    firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth().confirmPasswordReset(code, newPassword).then(() => {
      firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth().setPersistence(firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth.Auth.Persistence.LOCAL).then(() => {
        firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth().signInWithEmailAndPassword(email, newPassword).then(() => {
          const userID = firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth().currentUser.uid;
          firebase__WEBPACK_IMPORTED_MODULE_0___default.a.database().ref(`users/${userID}/firstName`).once('value', snap => {
            sendEmail(snap.val(), email, 'passwordHasBeenReset', 'Password has been reset');
          }).catch(error => {
            console.log(error.message);
          });
        }).catch(error => {
          console.log(error.message);
        });
      }).catch(error => {
        console.log(error.message);
      });
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/'); //send an email that password has been set 
    }).catch(() => {
      this.setState({
        errorMessage: 'The link is no longer valid, please go to the login page and request a new password reset link',
        loading: false
      });
    });
  });
}
;
function validateVehicle(userID, timestamp, dateFormat) {
  axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(`https://us-central1-perch-01.cloudfunctions.net/validateVehicle`, {
    userID: userID,
    timestamp: timestamp,
    dateFormat: dateFormat
  }).catch(error => {
    alert(error.message);
  });
}
;
function replyFeedback(response, riderOrDriver, senderID, timestamp) {
  const ref = riderOrDriver == 'Rider' ? `userFeedback/${senderID}/${timestamp}` : `driverFeedback/${senderID}/${timestamp}`;
  const nonUser = this.state.toShow.nonUser;
  if (nonUser) axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(`https://us-central1-perch-01.cloudfunctions.net/guestSendFeedback`, {
    email: this.state.toShow.email,
    subject: `Re:[${this.state.toShow.subject}]`,
    response: response,
    case: 'reply'
  }).catch(error => {
    alert(error.message);
  });
  firebase__WEBPACK_IMPORTED_MODULE_0___default.a.database().ref(ref).update({
    response: response,
    status: 'PROCESSED',
    responseDate: getDate()
  }).then(() => {
    this.setState({
      responseDate: new Date().getTime(),
      showResponse: true
    });
  }).catch(error => {
    alert(error.message);
  });
}
;
function sendUserEmail(email, subject, text) {
  axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(`https://us-central1-perch-01.cloudfunctions.net/sendEmail`, {
    email: email,
    subject: subject,
    text: text
  }).then(() => {
    this.setState({
      email: '',
      subject: '',
      text: '',
      loading: false
    });
  }).catch(error => {
    alert(error.message);
    this.setState({
      loading: false
    });
  });
}
function validateDriver(userID, timestamp, dateFormat) {
  axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(`https://us-central1-perch-01.cloudfunctions.net/validateDriver`, {
    userID: userID,
    timestamp: timestamp,
    dateFormat: dateFormat
  }).then(() => {
    this.loadResult();
    this.setState({
      showDocs: false,
      vehicle: {},
      verified: []
    });
  }).catch(error => {
    alert(error.message);
  });
}
; //MAKE A RANDOMID

function makeid(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;

  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}
;
function driverApplicationAdvance(uID, dateFormat, maxSeatNumber) {
  axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(`https://us-central1-perch-01.cloudfunctions.net/vehicleMaxSeatNumber`, {
    userID: uID,
    dateFormat: dateFormat,
    maxSeatNumber: maxSeatNumber
  }).then(() => {
    const {
      selected
    } = this.state;

    switch (selected.stage) {
      case 'three':
        {
          firebase__WEBPACK_IMPORTED_MODULE_0___default.a.database().ref(`driverApplications/${selected.userID}`).update({
            progress: JSON.stringify(["done", "done", "done", "ongoing", "undone"]),
            stage: "four"
          }).then(() => {
            //MAKE ARRANGEMENTS TO SEND DRIVER AN OFFER LETTER
            this.setState({
              showDocs: false
            }, () => {
              this.loadResult();
            });
          }).catch(error => {
            alert(error.message);
          });
        }
        break;

      case 'four':
        {
          //THE INDEPENNDENT CONTRACTOR DOCUMENT HAS BEEN SIGNED AND WE ARE GOOD TO GO
          firebase__WEBPACK_IMPORTED_MODULE_0___default.a.database().ref(`driverApplications/${selected.userID}`).update({
            progress: JSON.stringify(["done", "done", "done", "done", "done"]),
            stage: "five"
          }).then(() => {
            this.setState({
              showDocs: false
            }, () => {
              this.loadResult();
            });
          }).catch(error => {
            alert(error.message);
          });
        }
        break;
    }

    ;
  }).catch(error => console.log(error.message));
}
function getDate() {
  const DAY = new Date().getDate();
  const MONTH = new Date().getMonth();
  const YEAR = new Date().getFullYear();
  const HOUR = new Date().getHours();
  const MIN = new Date().getMinutes();
  const SECOND = new Date().getSeconds();
  return `${YEAR}-${MONTH}-${DAY}-${HOUR}-${MIN}-${SECOND}`;
}
;
function dateformat(time) {
  let slash1 = 0,
      slash2 = 0,
      slash3 = 0;

  for (let k = 0; k < time.length; k++) {
    if (time.charAt(k) == '-') slash1 == 0 ? slash1 = k : slash2 == 0 ? slash2 = k : slash3 = k;
    if (slash3 != 0) break;
  }

  ;
  const y = time.substring(0, slash1);
  const m = time.substring(slash1 + 1, slash2);
  const d = time.substring(slash2 + 1, slash3);
  return `${d}/${Number(m) + 1}/${y}`;
}
;
function polylineLenght(data) {
  let distance = 0;

  for (let k = 0; k < data.length - 1; k++) distance += distanceCalculator(data[k][0], data[k][1], data[k + 1][0], data[k + 1][1]);

  return distance;
}
;
function timeAndDate(time, month, year) {
  let slash1 = 0,
      slash2 = 0,
      slash3 = 0;

  for (let k = 0; k < time.length; k++) {
    if (time.charAt(k) == '-') slash1 == 0 ? slash1 = k : slash2 == 0 ? slash2 = k : slash3 = k;
  }

  const HOUR = Number(time.substring(slash1 + 1, slash2)) == 0 ? 12 : Number(time.substring(slash1 + 1, slash2)) > 12 ? Number(time.substring(slash1 + 1, slash2)) - 12 : Number(time.substring(slash1 + 1, slash2));
  const MIN = Number(time.substring(slash2 + 1, slash3)) < 10 ? `0` + time.substring(slash2 + 1, slash3) : Number(time.substring(slash2 + 1, slash3));
  const MERIDIAN = Number(time.substring(slash1 + 1, slash2)) < 12 ? 'AM' : 'PM';
  const DAY = time.substring(0, slash1);
  const MONTH = M.indexOf(month) + 1;
  const formattedDate = `${DAY}/${MONTH}/${year}, ${HOUR}:${MIN} ${MERIDIAN}`;
  return formattedDate;
}
;
function distanceCalculator(lat1, lon1, lat2, lon2) {
  let R = 6371 * 1000; // Radius of the earth in m

  let dLat = deg2rad(lat2 - lat1); // deg2rad below

  let dLon = deg2rad(lon2 - lon1);
  let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  let d = R * c; // Distance in m

  return d;
}
;
function emailFormat(email, type) {
  //@ is stored as -(hyphen)
  //. is stored as _(underscore)
  switch (type) {
    case 'emailToString':
      {
        return email.replace('@', '-').replace('.', '_');
      }
      break;

    case 'stringToEmail':
      {
        return email.replace('-', '@').replace('_', '.');
      }
      break;
  }
}
;

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

;

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

;
function dateOfQuery(timestamp) {
  return `${formatAMPM(new Date(timestamp)).toUpperCase()} ${('0' + new Date(timestamp).getDate()).slice(-2)}/${('0' + (new Date(timestamp).getMonth() + 1)).slice(-2)}/${new Date(timestamp).getFullYear()}`;
}
;
const M = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const colors = {
  GREEN: "#4EB848",
  WHITE: "#FFFFFF",
  GREY: "#959AAC",
  BLACK: "#000000",
  RED: "#FF0000",
  BLUE_TEXT: "#284ED6",
  BLUE: "#1970A7",
  PURPLE: "#A031AF",
  YELLOW: "#F0E23D",
  GOLD: "#FFAA00"
};
function isNumber(n) {
  return !isNaN(parseFloat(n)) && !isNaN(n - 0);
}
;
function deleteCard(userID, last4, selected) {
  axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(`https://us-central1-perch-01.cloudfunctions.net/deleteStripeCard`, {
    userID: userID,
    last4: last4,
    selected: selected
  }).catch(error => {
    console.log(error.message);
  });
}
;
function storeCard(userID, cardObject, setLoading, setErrorMessage, cancel) {
  let c = cardObject;
  c.card.cardId = cardObject.card.id;
  axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(`https://us-central1-perch-01.cloudfunctions.net/storeStripeCard`, {
    userID: userID,
    cardObject: c
  }).then(() => {
    cancel();
  }).catch(error => {
    setLoading(false);
    setErrorMessage(error.message);
  });
}
;
function buyKilometers(toSend) {
  this.setState({
    paymentLoading: true
  }, () => {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(`https://us-central1-perch-01.cloudfunctions.net/buyPerchKilometers`, _objectSpread(_objectSpread({}, toSend), {}, {
      status: 'initial'
    })).then(result => {
      const {
        status,
        client_secret,
        id
      } = result.data;
      toSend.paymentIntentId = id;
      toSend.status = 'confirm_payment';

      if (status == 'succeeded') {
        this.setState({
          paymentCompleted: true
        });
      } else if (status == 'requires_action') {
        stripe.authenticatePaymentIntent({
          clientSecret: client_secret
        }).then(data => {
          if (data.status == 'requires_confirmation') {
            axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(`https://us-central1-perch-01.cloudfunctions.net/buyPerchKilometers`, _objectSpread(_objectSpread({}, toSend), {}, {
              paymentIntentId: id,
              status: 'confirm_payment'
            })).then(result_ => {
              const status_ = result_.data.status;

              if (status_ == 'succeeded') {
                this.setState({
                  paymentCompleted: true
                });
              }
            }).catch(error => {
              this.setState({
                paymentError: true,
                paymentErrorMessage: error.message
              });
            });
          }
        }).catch(error => {
          this.setState({
            paymentError: true,
            paymentErrorMessage: error.message
          });
        });
      }
    }).catch(error => {
      this.setState({
        paymentError: true,
        paymentErrorMessage: error.message
      });
    });
  });
}
;
function formatDateAllValues(d) {
  return d.getFullYear().toString() + "/" + ((d.getMonth() + 1).toString().length == 2 ? (d.getMonth() + 1).toString() : "0" + (d.getMonth() + 1).toString()) + "/" + (d.getDate().toString().length == 2 ? d.getDate().toString() : "0" + d.getDate().toString()) + " - " + formatAMPM(d).toUpperCase();
}
;
function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = (millis % 60000 / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}
;
function cancelledTripResolver(toSend) {
  axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(`https://us-central1-perch-01.cloudfunctions.net/cancelledTripResolver`, toSend).then(() => {
    let newResult = this.state.result;
    delete newResult[toSend.cancelled_UNRESOLVED_KEY];
    this.setState({
      currentData: null,
      refundRiderAmount: '',
      refundRiderPerchKms: '',
      payFirstDriver: '',
      paySecondDriver: '',
      payThirdDriver: '',
      adminCut: '',
      result: newResult,
      loading: false
    });
  }).catch(error => {
    alert(error.message);
  });
}
;
function pendingProcessesFunction(toSend) {
  this.setState({
    loading: true,
    errorMessage: ''
  }, () => {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(`https://us-central1-perch-01.cloudfunctions.net/pendingProcesses`, toSend).then(data => {
      let newV = toSend.isNewProcess ? [] : this.state.listOfProcesses;
      const time = new Date().getTime();
      newV.push({
        title: toSend.title,
        details: toSend.details,
        timeCreated: time
      });
      this.setState({
        addProcess: false,
        isNewProcess: false,
        viewList: true,
        pushId: data.data,
        title: '',
        details: '',
        loading: false,
        listOfProcesses: newV
      }, () => {
        if (toSend.isNewProcess) this.setState({
          timeCreated: time
        });
      });
    }).catch(error => {
      alert(error.message);
    });
  });
}
;
function pendingProcessesFunctionDelete(pushId) {
  this.setState({
    loading1: true
  }, () => {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(`https://us-central1-perch-01.cloudfunctions.net/pendingProcessesDelete`, {
      pushId: pushId
    }).then(() => {
      let newV = _objectSpread({}, this.state.result);

      delete newV[pushId];
      this.setState({
        result: newV,
        loading1: false,
        addProcess: false,
        isNewProcess: false,
        viewList: false,
        pushId: '',
        userID: '',
        type: '',
        listOfProcesses: [],
        mainTopic: '',
        title: '',
        details: '',
        errorMessage: ''
      });
    }).catch(error => {
      alert(error.message);
    });
  });
}
;
function adminDeleteUser(userDetails) {
  this.setState({
    loading1: true
  }, () => {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(`https://us-central1-perch-01.cloudfunctions.net/deleteUser`, {
      userDetails: userDetails,
      adminDelete: true
    }).then(() => {
      this.setState({
        idSearch: '',
        result: null,
        loading: false,
        loading1: false,
        deleteUser: false,
        analytics: {}
      });
    }).catch(error => {
      console.log(error.message);
    });
  });
}

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "M1wr":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"svg": "layout_svg__1IibV"
};


/***/ }),

/***/ "Z6QF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Logo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Footer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardIcons; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("M1wr");
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




function Logo(props) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("svg", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.svg,
    viewBox: "0 0 215.338 338.512",
    preserveAspectRatio: 'xMinYMin meet',
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("g", {
      id: "Group_2",
      "data-name": "Group 2",
      transform: "translate(-3028 -1103.285)",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
        id: "Path_7",
        "data-name": "Path 7",
        d: "M635.347,169.576a44.41,44.41,0,0,0-15.718-16.109,42.173,42.173,0,0,0-50.751,4.927c-7.038,6.49-11.026,15.014-14.154,23.851a128.759,128.759,0,0,0-6.881,34.251c-.86,14.154-1.486,28.386-1.329,42.618.157,17.125,1.095,34.329,1.721,51.455,1.095,27.448-9.228,50.673-26.118,71.552a133.646,133.646,0,0,1-28.855,26.275,23.028,23.028,0,0,1-2.737,1.642c-4.145,2.033-8.054-.156-8.445-4.77-.078-1.486-.078-2.972-.078-4.457q0-110.964.078-221.927c.078-27.526,9.7-51.455,28.308-71.708,17.751-19.393,39.725-30.967,65.843-34.016,32.922-3.91,61.933,5.318,86.487,27.839,20.957,19.237,32.374,43.322,34.329,71.63a103.783,103.783,0,0,1-19.628,69.6c-17.595,24.554-41.367,39.1-71,44.1-5.318.938-10.791.782-16.187,1.095a5.375,5.375,0,0,1-5.943-4.223c-.782-3.05.938-5.083,3.441-6.49,3.91-2.346,7.976-4.457,11.73-6.96,10.244-6.647,18.689-14.936,24.007-26.2,6.491-13.607,6.256-27.6,2.111-41.836a116.763,116.763,0,0,1-3.988-19.237c-1.095-8.993,2.737-12.668,11.808-12.746C633.783,169.732,634.252,169.654,635.347,169.576Z",
        transform: "translate(2546 1031)",
        fill: props.color
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
        id: "Path_8",
        "data-name": "Path 8",
        d: "M496.972,396.9c1.408-.938,2.268-1.486,3.05-2.111,12.668-10.791,23.147-23.3,30.654-38.239a88.837,88.837,0,0,0,9.775-43.635c-.391-12.355-1.329-24.789-1.642-37.144-.313-11.339-.391-22.678-.078-34.016.313-10.713.782-21.426,2.033-32.061,1.642-14.388,5.239-28.308,11.886-41.367,15.64-30.654,49.891-35.033,72.412-23.46,15.014,7.742,24.085,20.644,30.263,35.971a5.68,5.68,0,0,1-7.507,7.272c-3.05-1.329-6.021-2.737-9.071-3.91-2.111-.86-3.441-.235-2.893,2.268.938,4.145,1.72,8.367,2.972,12.434,3.128,10.4,5.239,20.957,3.91,31.9-1.955,16.343-9.071,30.106-21.035,41.445a42.779,42.779,0,0,0-3.284,3.284,12.977,12.977,0,0,0,2.111-.235c1.877-.547,3.91-1.095,5.787-1.8q38.239-14.662,54.973-52.237a92.667,92.667,0,0,0,7.507-46.606c-2.19-24.085-12.042-44.73-29.637-61.386-20.879-19.706-45.9-28.542-74.21-26.275-27.448,2.19-50.125,14.467-67.485,35.971-12.9,16.031-20.566,34.486-20.723,55.052-.391,71.63-.156,143.259-.156,214.889,0,1.095.235,2.19.391,3.988Z",
        transform: "translate(2542.837 1027.867)",
        fill: props.color
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
        id: "Path_9",
        "data-name": "Path 9",
        d: "M628.93,183.1a5.441,5.441,0,0,1,5.474,5.474,5.711,5.711,0,0,1-5.552,5.709,6.037,6.037,0,0,1-5.552-5.943A5.484,5.484,0,0,1,628.93,183.1Z",
        transform: "translate(2515.194 1006.841)",
        fill: props.color
      })]
    })
  });
}
;
function Footer(props) {
  if (props.size == 'laptopSize') return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("svg", {
    viewBox: "0 0 1920 848.882",
    preserveAspectRatio: 'xMinYMin meet',
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("defs", {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("linearGradient", {
        id: "linear-gradient",
        x1: "0.5",
        x2: "0.5",
        y2: "1",
        gradientUnits: "objectBoundingBox",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("stop", {
          offset: "0",
          stopColor: "#fff"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("stop", {
          offset: "1",
          stopColor: "#f4f5fa"
        })]
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
      id: "Path_3951",
      "data-name": "Path 3951",
      d: "M2392.783,4626.53S2029.567,4947.686,1641.1,4704.5c1.942,1.855-766.252-594.51-1168.316-154.545,3.885,0,0-603.328,0-603.328l1919.029,1.028Z",
      transform: "translate(2392.783 4795.508) rotate(180)",
      fill: "url(#linear-gradient)"
    })]
  });else if (props.size == 'tabSize') return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("svg", {
    viewBox: "0 0 768 1842.856",
    preserveAspectRatio: 'xMinYMin meet',
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("defs", {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("linearGradient", {
        id: "linear-gradient",
        x1: "0.5",
        x2: "0.5",
        y2: "1",
        gradientUnits: "objectBoundingBox",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("stop", {
          offset: "0",
          stopColor: "#fff"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("stop", {
          offset: "1",
          stopColor: "#f4f5fa"
        })]
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
      id: "Path_3951",
      "data-name": "Path 3951",
      d: "M1240.784,5422.645s-145.287,697.2-300.674,169.262c.777,4.028-306.5-1290.634-467.326-335.5,1.554,0,0-1309.776,0-1309.776l767.612,2.231Z",
      transform: "translate(1240.784 5789.482) rotate(180)",
      fill: "url(#linear-gradient)"
    })]
  });else if (props.size == 'phoneSize') return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("svg", {
    viewBox: "0 0 375.372 1566.853",
    preserveAspectRatio: 'xMinYMin meet',
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("defs", {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("linearGradient", {
        id: "linear-gradient",
        x1: "0.5",
        x2: "0.5",
        y2: "1",
        gradientUnits: "objectBoundingBox",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("stop", {
          offset: "0",
          stopColor: "#fff"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("stop", {
          offset: "1",
          stopColor: "#f4f5fa"
        })]
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
      id: "Path_3951",
      "data-name": "Path 3951",
      d: "M848.156,5201.583S777.144,5794.366,701.2,5345.495c.38,3.425-132.808-752-228.413-285.255.759,0,0-1113.613,0-1113.613H843.409Z",
      transform: "translate(848.156 5513.479) rotate(180)",
      fill: "url(#linear-gradient)"
    })]
  });
}
;
function DashboardIcons(props) {
  if (props.icon == 'db') //dashboard
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("svg", {
      viewBox: "0 0 24.258 24.258",
      preserveAspectRatio: 'xMinYMin meet',
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
        id: "Path_3952",
        "data-name": "Path 3952",
        d: "M9.349,0H1.769A1.771,1.771,0,0,0,0,1.769V6.317A1.771,1.771,0,0,0,1.769,8.086H9.349a1.771,1.771,0,0,0,1.769-1.769V1.769A1.771,1.771,0,0,0,9.349,0Zm0,0",
        fill: "#fff"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
        id: "Path_3953",
        "data-name": "Path 3953",
        d: "M9.349,213.332H1.769A1.771,1.771,0,0,0,0,215.1v10.613a1.771,1.771,0,0,0,1.769,1.769H9.349a1.771,1.771,0,0,0,1.769-1.769V215.1A1.771,1.771,0,0,0,9.349,213.332Zm0,0",
        transform: "translate(0 -203.225)",
        fill: "#fff"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
        id: "Path_3954",
        "data-name": "Path 3954",
        d: "M286.682,341.332H279.1a1.771,1.771,0,0,0-1.769,1.769v4.548a1.771,1.771,0,0,0,1.769,1.769h7.581a1.771,1.771,0,0,0,1.769-1.769V343.1A1.771,1.771,0,0,0,286.682,341.332Zm0,0",
        transform: "translate(-264.192 -325.16)",
        fill: "#fff"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
        id: "Path_3955",
        "data-name": "Path 3955",
        d: "M286.682,0H279.1a1.771,1.771,0,0,0-1.769,1.769V12.382a1.771,1.771,0,0,0,1.769,1.769h7.581a1.771,1.771,0,0,0,1.769-1.769V1.769A1.771,1.771,0,0,0,286.682,0Zm0,0",
        transform: "translate(-264.192)",
        fill: "#fff"
      })]
    });else if (props.icon == 'th') //trip history
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("svg", {
      viewBox: "0 0 24.258 20.793",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("g", {
        id: "history",
        transform: "translate(0 -32)",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("g", {
          id: "Group_1731",
          "data-name": "Group 1731",
          transform: "translate(0 32)",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("g", {
            id: "Group_1730",
            "data-name": "Group 1730",
            transform: "translate(0 0)",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
              id: "Path_3956",
              "data-name": "Path 3956",
              d: "M234.667,138.667v5.776l4.944,2.934.832-1.4-4.043-2.4v-4.909Z",
              transform: "translate(-221.96 -132.891)",
              fill: "#fff"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
              id: "Path_3957",
              "data-name": "Path 3957",
              d: "M13.856,32A10.389,10.389,0,0,0,3.465,42.4H0l4.5,4.5.081.167L9.241,42.4H5.776A8.1,8.1,0,1,1,8.15,48.108L6.515,49.743A10.394,10.394,0,1,0,13.856,32Z",
              transform: "translate(0 -32)",
              fill: "#fff"
            })]
          })
        })
      })
    });else if (props.icon == 'pw') //perch wallet
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("svg", {
      viewBox: "0 0 24.258 20.06",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("g", {
        id: "wallet",
        transform: "translate(0 -44.308)",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("g", {
          id: "Group_1735",
          "data-name": "Group 1735",
          transform: "translate(0 44.308)",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("g", {
            id: "Group_1734",
            "data-name": "Group 1734",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
              id: "Path_3958",
              "data-name": "Path 3958",
              d: "M17.727,50.839h6.531V47.807a3.5,3.5,0,0,0-3.5-3.5H3.5a3.5,3.5,0,0,0-3.5,3.5V60.869a3.5,3.5,0,0,0,3.5,3.5H20.759a3.5,3.5,0,0,0,3.5-3.5V57.837H17.727a3.5,3.5,0,1,1,0-7Z",
              transform: "translate(0 -44.308)",
              fill: "#fff"
            })
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("g", {
          id: "Group_1737",
          "data-name": "Group 1737",
          transform: "translate(15.628 52.238)",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("g", {
            id: "Group_1736",
            "data-name": "Group 1736",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
              id: "Path_3959",
              "data-name": "Path 3959",
              d: "M331.945,211.692a2.1,2.1,0,1,0,0,4.2h6.531v-4.2h-6.531Zm.933,2.8h-.933a.7.7,0,0,1,0-1.4h.933a.7.7,0,0,1,0,1.4Z",
              transform: "translate(-329.846 -211.692)",
              fill: "#fff"
            })
          })
        })]
      })
    });else if (props.icon == 'cu') //contact us
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("svg", {
      viewBox: "0 0 24.258 27.6",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("g", {
        id: "headphones",
        transform: "translate(-31)",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("g", {
          id: "Group_3836",
          "data-name": "Group 3836",
          transform: "translate(34.234 11.32)",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("g", {
            id: "Group_3835",
            "data-name": "Group 3835",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
              id: "Path_1636",
              "data-name": "Path 1636",
              d: "M93.426,210A2.429,2.429,0,0,0,91,212.426V219a2.426,2.426,0,1,0,4.852,0v-6.577A2.429,2.429,0,0,0,93.426,210Z",
              transform: "translate(-91 -210)",
              fill: "#fff"
            })
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("g", {
          id: "Group_3838",
          "data-name": "Group 3838",
          transform: "translate(31 13.065)",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("g", {
            id: "Group_3837",
            "data-name": "Group 3837",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
              id: "Path_1637",
              "data-name": "Path 1637",
              d: "M32.617,243.047a4.012,4.012,0,0,1,.069-.681,2.421,2.421,0,0,0-1.686,2.3v3.342a2.421,2.421,0,0,0,1.686,2.3,4.012,4.012,0,0,1-.069-.681Z",
              transform: "translate(-31 -242.366)",
              fill: "#fff"
            })
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("g", {
          id: "Group_3840",
          "data-name": "Group 3840",
          transform: "translate(40.703 11.32)",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("g", {
            id: "Group_3839",
            "data-name": "Group 3839",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
              id: "Path_1638",
              "data-name": "Path 1638",
              d: "M219.895,210a2.428,2.428,0,0,0-2.426,2.426V219a2.428,2.428,0,0,0,2.426,2.426,2.393,2.393,0,0,0,.695-.114,2.421,2.421,0,0,1-2.312,1.731H215.7a2.426,2.426,0,1,0,0,1.617h2.575a4.048,4.048,0,0,0,4.043-4.043v-8.194A2.429,2.429,0,0,0,219.895,210Z",
              transform: "translate(-211 -210)",
              fill: "#fff"
            })
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("g", {
          id: "Group_3842",
          "data-name": "Group 3842",
          transform: "translate(53.572 13.065)",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("g", {
            id: "Group_3841",
            "data-name": "Group 3841",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
              id: "Path_1639",
              "data-name": "Path 1639",
              d: "M449.722,242.366a4.015,4.015,0,0,1,.069.681v6.577a4.015,4.015,0,0,1-.069.681,2.421,2.421,0,0,0,1.686-2.3v-3.342A2.421,2.421,0,0,0,449.722,242.366Z",
              transform: "translate(-449.722 -242.366)",
              fill: "#fff"
            })
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("g", {
          id: "Group_3844",
          "data-name": "Group 3844",
          transform: "translate(31)",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("g", {
            id: "Group_3843",
            "data-name": "Group 3843",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
              id: "Path_1640",
              "data-name": "Path 1640",
              d: "M43.129,0A12.142,12.142,0,0,0,31,12.129v.021a4,4,0,0,1,1.654-.751,10.5,10.5,0,0,1,20.95,0,4.005,4.005,0,0,1,1.654.751v-.021A12.142,12.142,0,0,0,43.129,0Z",
              transform: "translate(-31)",
              fill: "#fff"
            })
          })
        })]
      })
    });else if (props.icon == 'ss') //settings
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("svg", {
      viewBox: "0 0 24.258 24.932",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("g", {
        id: "settings",
        transform: "translate(-5.768)",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("g", {
          id: "Group_3848",
          "data-name": "Group 3848",
          transform: "translate(5.768)",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
            id: "Path_3960",
            "data-name": "Path 3960",
            d: "M29.787,15.745l-2.63-2.063a9.79,9.79,0,0,0,.087-1.215,9.79,9.79,0,0,0-.087-1.215l2.637-2.063a.622.622,0,0,0,.15-.8L27.449,4.07a.617.617,0,0,0-.76-.268l-3.1,1.253a9.459,9.459,0,0,0-2.107-1.228L21.01.524A.641.641,0,0,0,20.387,0H15.4a.629.629,0,0,0-.617.524l-.467,3.3a9.225,9.225,0,0,0-2.107,1.228L9.105,3.8a.624.624,0,0,0-.76.268L5.852,8.39a.624.624,0,0,0,.15.8l2.63,2.063a9.79,9.79,0,0,0-.087,1.215,9.79,9.79,0,0,0,.087,1.215L6,15.745a.622.622,0,0,0-.15.8l2.493,4.32a.617.617,0,0,0,.76.268l3.1-1.253a9.459,9.459,0,0,0,2.107,1.228l.467,3.3a.629.629,0,0,0,.617.524h4.986A.629.629,0,0,0,21,24.409l.467-3.3a9.225,9.225,0,0,0,2.107-1.228l3.1,1.253a.624.624,0,0,0,.76-.268l2.493-4.32A.624.624,0,0,0,29.787,15.745ZM17.894,16.829a4.363,4.363,0,1,1,4.363-4.363A4.36,4.36,0,0,1,17.894,16.829Z",
            transform: "translate(-5.768)",
            fill: "#fff"
          })
        })
      })
    });else if (props.icon == 'tt') //tutorial
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("svg", {
      viewBox: "0 0 24.258 24.258",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
        id: "Path_4073",
        "data-name": "Path 4073",
        d: "M96.872,429.606H94.938a2.138,2.138,0,0,1-2.091-1.714L92.669,427H85.913l-.178.892a2.138,2.138,0,0,1-2.091,1.714H81.711a.711.711,0,1,0,0,1.421H96.872a.711.711,0,1,0,0-1.421Z",
        transform: "translate(-77.162 -406.769)",
        fill: "#fff"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("g", {
        id: "Group_4017",
        "data-name": "Group 4017",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("ellipse", {
          id: "Ellipse_193",
          "data-name": "Ellipse 193",
          cx: "1",
          cy: "1.5",
          rx: "1",
          ry: "1.5",
          transform: "translate(11 3.258)",
          fill: "#fff"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
          id: "Path_4074",
          "data-name": "Path 4074",
          d: "M203.82,155a2.609,2.609,0,0,0-2.6,2.369h5.19A2.609,2.609,0,0,0,203.82,155Z",
          transform: "translate(-191.691 -147.656)",
          fill: "#fff"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
          id: "Path_4075",
          "data-name": "Path 4075",
          d: "M22.126,0H2.132A2.134,2.134,0,0,0,0,2.132V16.677a2.134,2.134,0,0,0,2.132,2.132H22.126a2.134,2.134,0,0,0,2.132-2.132V2.132A2.134,2.134,0,0,0,22.126,0ZM8.1,9.949a4.029,4.029,0,0,1,2.056-3.51,2.606,2.606,0,1,1,3.942,0,4.029,4.029,0,0,1,2.056,3.51v.474a.711.711,0,0,1-.711.711H8.812a.711.711,0,0,1-.711-.711Zm12.555,5.78H7.628v.237a.711.711,0,1,1-1.421,0V15.73H3.6a.711.711,0,1,1,0-1.421H6.207v-.237a.711.711,0,0,1,1.421,0v.237H20.657a.711.711,0,1,1,0,1.421Z",
          fill: "#fff"
        })]
      })]
    });else if (props.icon == 'vh') //vehicle
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("svg", {
      viewBox: "0 0 29.042 22.546",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
        id: "Path_2405",
        "data-name": "Path 2405",
        d: "M52.215,42.418l-.134-.776H53.9a.766.766,0,0,0,.745-.94l-.722-3.057a.765.765,0,0,0-.745-.589h-1.9l-.008-.046A3.785,3.785,0,0,0,47.682,34H33.864a3.992,3.992,0,0,0-3.714,2.984l-.015.073H28.251a.765.765,0,0,0-.745.589L26.783,40.7a.766.766,0,0,0,.745.94h1.6l-.168.768A3.067,3.067,0,0,0,26,45.464v5.35a3.066,3.066,0,0,0,3.057,3.057v.546a2.16,2.16,0,0,0,2.19,2.129h1.735a2.16,2.16,0,0,0,2.19-2.129v-.546h10.7v.546a2.16,2.16,0,0,0,2.19,2.129H49.8a2.16,2.16,0,0,0,2.19-2.129v-.546a3.066,3.066,0,0,0,3.057-3.057v-5.35A3.065,3.065,0,0,0,52.215,42.418Zm.355-3.833.359,1.529H51.81l-.267-1.529ZM31.644,37.313a2.482,2.482,0,0,1,2.22-1.785H47.682a2.254,2.254,0,0,1,2.079,1.746l.9,5.132H30.528Zm-3.149,2.8.359-1.529H29.8l-.336,1.529Zm5.147,14.3a.636.636,0,0,1-.661.6H31.247a.636.636,0,0,1-.661-.6v-.546h3.057Zm16.814,0a.636.636,0,0,1-.661.6H48.061a.636.636,0,0,1-.661-.6v-.546h3.057Zm3.057-3.6a1.528,1.528,0,0,1-1.529,1.529H29.057a1.528,1.528,0,0,1-1.529-1.529v-5.35a1.528,1.528,0,0,1,1.529-1.529H51.985a1.528,1.528,0,0,1,1.529,1.529Z",
        transform: "translate(-26 -34)",
        fill: "#fff"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
        id: "Path_2406",
        "data-name": "Path 2406",
        d: "M40.878,68.057H50.05a.764.764,0,0,0,0-1.529H40.878a.764.764,0,0,0,0,1.529ZM36.293,65a2.293,2.293,0,1,0,2.293,2.293A2.293,2.293,0,0,0,36.293,65Zm0,3.057a.764.764,0,1,1,.764-.764A.764.764,0,0,1,36.293,68.057Z",
        transform: "translate(-30.943 -53.154)",
        fill: "#fff"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
        id: "Path_2407",
        "data-name": "Path 2407",
        d: "M84.293,65a2.293,2.293,0,1,0,2.293,2.293A2.293,2.293,0,0,0,84.293,65Zm0,3.057a.764.764,0,1,1,.764-.764A.764.764,0,0,1,84.293,68.057Z",
        transform: "translate(-60.6 -53.154)",
        fill: "#fff"
      })]
    });else if (props.icon == 'tx') //tax
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("svg", {
      viewBox: "0 0 24.593 24.593",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
        id: "Path_4078",
        "data-name": "Path 4078",
        d: "M20.388,10.488V.723A.723.723,0,0,0,19.665,0H.723A.723.723,0,0,0,0,.723v19.4a1.176,1.176,0,0,0,1.156,1.175A1.179,1.179,0,0,0,2.307,20.12V12.976c0-.01,0-.02,0-.03a2.56,2.56,0,0,1,2.564-2.458ZM13.406,3.647a.723.723,0,1,1,1.117-.92l1.084,1.317,1.084-1.317a.724.724,0,0,1,1.117.92L16.544,5.183,17.809,6.72a.723.723,0,0,1-1.117.919L15.607,6.322,14.523,7.639a.723.723,0,1,1-1.117-.919L14.67,5.183ZM7.276,4.83a2.366,2.366,0,1,1,4.732,0V7.18a.723.723,0,0,1-1.447,0V6.618H8.722V7.18a.723.723,0,1,1-1.447,0ZM4.147,7.9a.723.723,0,0,1-.723-.723V3.91H2.5a.723.723,0,0,1,0-1.447H5.79a.723.723,0,0,1,0,1.447H4.87V7.18A.723.723,0,0,1,4.147,7.9Z",
        fill: "#fff"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
        id: "Path_4079",
        "data-name": "Path 4079",
        d: "M73.424,247.5h0a1.117,1.117,0,0,0-1.118,1.058v7.127a2.6,2.6,0,0,1-.281,1.175h2.524v-8.24A1.121,1.121,0,0,0,73.424,247.5Z",
        transform: "translate(-68.547 -235.565)",
        fill: "#fff"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
        id: "Path_4080",
        "data-name": "Path 4080",
        d: "M182.719,82.01a.919.919,0,1,0-1.839,0v.342h1.839Z",
        transform: "translate(-172.158 -77.18)",
        fill: "#fff"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
        id: "Path_4081",
        "data-name": "Path 4081",
        d: "M165.307,247.5H149.02a2.552,2.552,0,0,1,.257,1.121v10.814a.723.723,0,0,0,.723.723h15.7a.723.723,0,0,0,.723-.723V248.621A1.121,1.121,0,0,0,165.307,247.5Zm-13.029,3.707h5.605a.723.723,0,1,1,0,1.447h-5.605a.723.723,0,0,1,0-1.447Zm5.64,5.352c-.035,0,.307,0-5.64,0a.723.723,0,1,1,0-1.447h5.605a.723.723,0,0,1,.035,1.446Zm6.059,0h-2.749a.723.723,0,1,1,0-1.447h2.749a.723.723,0,1,1,0,1.447Zm0-3.906h-2.749a.723.723,0,0,1,0-1.447h2.749a.723.723,0,0,1,0,1.447Z",
        transform: "translate(-141.834 -235.565)",
        fill: "#fff"
      })]
    });else if (props.icon == 'pi') //payout information
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("svg", {
      viewBox: "0 0 24.348 16.232",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("g", {
        id: "credit-card",
        transform: "translate(0 -85.333)",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("g", {
          id: "Group_4021",
          "data-name": "Group 4021",
          transform: "translate(0 91.42)",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("g", {
            id: "Group_4020",
            "data-name": "Group 4020",
            transform: "translate(0 0)",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
              id: "Path_4076",
              "data-name": "Path 4076",
              d: "M23.84,213.333H.507A.479.479,0,0,0,0,213.84v7.1a2.512,2.512,0,0,0,2.536,2.536H21.811a2.512,2.512,0,0,0,2.536-2.536v-7.1A.479.479,0,0,0,23.84,213.333Zm-20.29,4.058H7.609a.507.507,0,1,1,0,1.015H3.551a.507.507,0,1,1,0-1.015Zm7.1,3.043h-7.1a.507.507,0,1,1,0-1.015h7.1a.507.507,0,1,1,0,1.015Zm8.623,0a1.714,1.714,0,0,1-1.014-.3,1.714,1.714,0,0,1-1.014.3,2.029,2.029,0,0,1,0-4.058,1.714,1.714,0,0,1,1.014.3,1.714,1.714,0,0,1,1.014-.3,2.029,2.029,0,1,1,0,4.058Z",
              transform: "translate(0 -213.333)",
              fill: "#fff"
            })
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("g", {
          id: "Group_4023",
          "data-name": "Group 4023",
          transform: "translate(0 85.333)",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("g", {
            id: "Group_4022",
            "data-name": "Group 4022",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
              id: "Path_4077",
              "data-name": "Path 4077",
              d: "M21.811,85.333H2.536A2.512,2.512,0,0,0,0,87.869v1.014a.479.479,0,0,0,.507.507H23.84a.479.479,0,0,0,.507-.507V87.869A2.512,2.512,0,0,0,21.811,85.333Z",
              transform: "translate(0 -85.333)",
              fill: "#fff"
            })
          })
        })]
      })
    });else if (props.icon == 'md') {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 56.009 64.01",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("path", {
        id: "Icon_open-document",
        "data-name": "Icon open-document",
        d: "M0,0V64.01H56.009V32.005H24V0ZM32.005,0V24h24ZM8,16h8v8H8Zm0,16h8v8H8Zm0,16H40.006v8H8Z",
        fill: "#fff"
      })
    });
  } else if (props.icon == 'one') return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("svg", {
    viewBox: "0 0 13 38",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("text", {
      id: "_1",
      "data-name": "1",
      transform: "translate(0 30)",
      fill: "#fff",
      "font-size": "31",
      "font-family": "Gilroy-ExtraBold, Gilroy",
      "font-weight": "800",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("tspan", {
        x: "0",
        y: "0",
        children: "1"
      })
    })
  });else if (props.icon == 'two') return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("svg", {
    viewBox: "0 0 17 38",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("text", {
      id: "_2",
      "data-name": "2",
      transform: "translate(0 30)",
      fill: "#fff",
      "font-size": "31",
      "font-family": "Gilroy-ExtraBold, Gilroy",
      "font-weight": "800",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("tspan", {
        x: "0",
        y: "0",
        children: "2"
      })
    })
  });else if (props.icon == 'three') return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("svg", {
    viewBox: "0 0 18 38",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("text", {
      id: "_3",
      "data-name": "3",
      transform: "translate(0 30)",
      fill: "#fff",
      "font-size": "31",
      "font-family": "Gilroy-ExtraBold, Gilroy",
      "font-weight": "800",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("tspan", {
        x: "0",
        y: "0",
        children: "3"
      })
    })
  });
}
;

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "eUvw":
/***/ (function(module, exports) {

module.exports = require("react-truncate");

/***/ }),

/***/ "iaUL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("5t/q");
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _functions_images_vectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Z6QF");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("5mtF");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("7v8O");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("mTxg");
/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_cg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_card_flip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("68mg");
/* harmony import */ var react_card_flip__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_card_flip__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_truncate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("eUvw");
/* harmony import */ var react_truncate__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_truncate__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _functions_functions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("9uY5");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("2Hsl");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("pNaP");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//driver sign in and sign up

















const [WHITE] = ['#FFFFFF'];
class index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  static async getInitialProps({
    query
  }) {
    const {
      mode,
      referralCode
    } = query;
    return {
      mode: mode,
      referralCode: referralCode
    };
  }

  constructor(props) {
    var _this$props;

    super(props);

    _defineProperty(this, "resend", type => {
      if (type == 'phoneNumber') this.setState({
        phoneNumberTimer: 60
      }, () => {
        const time = setInterval(() => {
          if (this.state.phoneNumberTimer == 0) clearInterval(time);else this.setState({
            phoneNumberTimer: this.state.phoneNumberTimer - 1
          });
        }, 1000);
      });else if (type == 'email') this.setState({
        emailTimer: 60
      }, () => {
        const time = setInterval(() => {
          if (this.state.emailTimer == 0) clearInterval(time);else this.setState({
            emailTimer: this.state.emailTimer - 1
          });
        }, 1000);
      });
      _functions_functions__WEBPACK_IMPORTED_MODULE_11__[/* sendVerification */ "A"].call(this, this.state.userDetails.userID, type, 'storeAndSend', 'nocode', this.state.userDetails.phoneNumber, this.state.userDetails.email, this.state.userDetails.firstName);
    });

    _defineProperty(this, "updateWindowDimensions", () => {
      this.setState({
        width: window.innerWidth,
        height: window.innerHeight
      });
    });

    this.state = {
      error: false,
      errorMessage: '',
      isFlipped: (this === null || this === void 0 ? void 0 : (_this$props = this.props) === null || _this$props === void 0 ? void 0 : _this$props.mode) == 'signUp' ? true : false,
      displayVerification: false,
      //false at first then if it is not verified then you have to display it,
      changeEmail_PhoneNumber: false,
      changeEmailLoader: false,
      changePhoneLoader: false,
      email: '',
      password: '',
      showPassword: false,
      forgotPassword: false,
      referralCode: this.props.referralCode || '',
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
      emailVerificationCode: '',
      emailVerified: false,
      phoneVerified: false,
      verificationPhoneLoader: false,
      verificationEmailLoader: false,
      newEmail: '',
      newPhoneNumber: '',
      emailTimer: 0,
      phoneNumberTimer: 0,
      loading: false,
      width: '100vw',
      height: '100vh',
      countryCode: 1
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  render() {
    if (this.state.phoneVerified && this.state.emailVerified) {
      firebase__WEBPACK_IMPORTED_MODULE_13___default.a.auth().setPersistence(firebase__WEBPACK_IMPORTED_MODULE_13___default.a.auth.Auth.Persistence.LOCAL).then(() => {
        if (this.state.isFlipped) firebase__WEBPACK_IMPORTED_MODULE_13___default.a.auth().signInWithEmailAndPassword(this.state.email1, this.state.password1).then(() => {
          next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/s/db/ddash').then(() => window.scrollTo(0, 0));
        }).catch(error => {
          this.setState({
            error: true,
            errorMessage: 'Network error. Please refresh page and log in'
          });
        });else firebase__WEBPACK_IMPORTED_MODULE_13___default.a.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(() => {
          next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/s/db/ddash').then(() => window.scrollTo(0, 0));
        }).catch(error => {
          this.setState({
            error: true,
            errorMessage: 'Network error. Please refresh page and log in'
          });
        });
      });
    }

    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])("div", {
      className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("title", {
          children: "Sign In or Sign Up | Perch"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("meta", {
          name: "viewport",
          content: "width=device-width, initial-scale=1"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("link", {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("link", {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("link", {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("link", {
          rel: "manifest",
          href: "/site.webmanifest"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("link", {
          rel: "mask-icon",
          href: "/safari-pinned-tab.svg",
          color: "#5bbad5"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("meta", {
          name: "theme-color",
          content: "#ffffff"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("html", {
          lang: "en"
        })]
      }), this.state.isFlipped ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("img", {
        src: "/d_su.svg",
        alt: "Sign in",
        className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.img,
        style: {
          height: this.state.height,
          width: this.state.width
        }
      }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("img", {
        src: "/d_si.svg",
        alt: "Log in",
        className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.img,
        style: {
          height: this.state.height,
          width: this.state.width
        }
      }), this.state.changeEmail_PhoneNumber ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])("div", {
        className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.card ///SIGN IN
        ,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("a", {
          className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.logo,
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_functions_images_vectors__WEBPACK_IMPORTED_MODULE_3__[/* Logo */ "c"], {
            color: '#4EB848'
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("p", {
          style: {
            marginBottom: '10px',
            textAlign: 'center'
          },
          className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title,
          children: "Change Email / Phone Number"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("p", {
          className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cvTitle,
          children: "Enter new email"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])("div", {
          className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.inputCont_,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])("div", {
            className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.inputContHalf,
            style: {
              width: '65%'
            },
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(react_icons_cg__WEBPACK_IMPORTED_MODULE_6__["CgKeyboard"], {
              color: '#4EB848',
              size: 20,
              style: {
                marginRight: '10px',
                marginLeft: '10px'
              }
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("input", {
              type: "text",
              placeholder: this.state.userDetails.email,
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.pH,
              value: this.state.newEmail,
              onChange: v => {
                this.setState({
                  newEmail: v.target.value
                });
              }
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("div", {
            className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.button1,
            style: {
              width: '30%'
            },
            onClick: () => {
              if (this.state.newEmail.length == 0) this.setState({
                error: true,
                errorMessage: 'Email must be valid'
              });else this.setState({
                changeEmailLoader: true
              }, () => {
                _functions_functions__WEBPACK_IMPORTED_MODULE_11__[/* changeEmailOrPhoneNumber */ "e"].call(this, 'email', this.state.userDetails.userID, '', this.state.newEmail);
              });
            },
            children: this.state.changeEmailLoader ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(react_loader_spinner__WEBPACK_IMPORTED_MODULE_12___default.a, {
              type: "TailSpin",
              color: WHITE,
              height: '20px',
              width: '20px'
            }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("p", {
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.buttonText1,
              children: "Change"
            })
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("p", {
          className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cvTitle,
          children: "Enter new phone number"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])("div", {
          className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.inputCont_,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])("div", {
            className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.inputContHalf,
            style: {
              width: '65%'
            },
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])("select", {
              value: `+${this.state.countryCode}`,
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.countryCodeBox,
              style: {
                width: '30%'
              },
              onChange: v => {
                this.setState({
                  countryCode: v.target.value
                });
              },
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                value: "",
                style: {
                  display: 'none'
                },
                children: `+${this.state.countryCode}`
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                "data-countryCode": "CA",
                value: "1",
                children: "Canada (+1)"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])("optgroup", {
                label: "Other countries",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "DZ",
                  value: "213",
                  children: "Algeria (+213)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "AD",
                  value: "376",
                  children: "Andorra (+376)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "AO",
                  value: "244",
                  children: "Angola (+244)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "AI",
                  value: "1264",
                  children: "Anguilla (+1264)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "AG",
                  value: "1268",
                  children: "Antigua & Barbuda (+1268)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "AR",
                  value: "54",
                  children: "Argentina (+54)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "AM",
                  value: "374",
                  children: "Armenia (+374)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "AW",
                  value: "297",
                  children: "Aruba (+297)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "AU",
                  value: "61",
                  children: "Australia (+61)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "AT",
                  value: "43",
                  children: "Austria (+43)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "AZ",
                  value: "994",
                  children: "Azerbaijan (+994)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "BS",
                  value: "1242",
                  children: "Bahamas (+1242)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "BH",
                  value: "973",
                  children: "Bahrain (+973)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "BD",
                  value: "880",
                  children: "Bangladesh (+880)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "BB",
                  value: "1246",
                  children: "Barbados (+1246)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "BY",
                  value: "375",
                  children: "Belarus (+375)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "BE",
                  value: "32",
                  children: "Belgium (+32)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "BZ",
                  value: "501",
                  children: "Belize (+501)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "BJ",
                  value: "229",
                  children: "Benin (+229)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "BM",
                  value: "1441",
                  children: "Bermuda (+1441)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "BT",
                  value: "975",
                  children: "Bhutan (+975)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "BO",
                  value: "591",
                  children: "Bolivia (+591)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "BA",
                  value: "387",
                  children: "Bosnia Herzegovina (+387)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "BW",
                  value: "267",
                  children: "Botswana (+267)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "BR",
                  value: "55",
                  children: "Brazil (+55)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "BN",
                  value: "673",
                  children: "Brunei (+673)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "BG",
                  value: "359",
                  children: "Bulgaria (+359)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "BF",
                  value: "226",
                  children: "Burkina Faso (+226)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "BI",
                  value: "257",
                  children: "Burundi (+257)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "KH",
                  value: "855",
                  children: "Cambodia (+855)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "CM",
                  value: "237",
                  children: "Cameroon (+237)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "CA",
                  value: "1",
                  children: "Canada (+1)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "CV",
                  value: "238",
                  children: "Cape Verde Islands (+238)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "KY",
                  value: "1345",
                  children: "Cayman Islands (+1345)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "CF",
                  value: "236",
                  children: "Central African Republic (+236)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "CL",
                  value: "56",
                  children: "Chile (+56)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "CN",
                  value: "86",
                  children: "China (+86)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "CO",
                  value: "57",
                  children: "Colombia (+57)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "KM",
                  value: "269",
                  children: "Comoros (+269)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "CG",
                  value: "242",
                  children: "Congo (+242)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "CK",
                  value: "682",
                  children: "Cook Islands (+682)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "CR",
                  value: "506",
                  children: "Costa Rica (+506)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "HR",
                  value: "385",
                  children: "Croatia (+385)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "CU",
                  value: "53",
                  children: "Cuba (+53)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "CY",
                  value: "90392",
                  children: "Cyprus North (+90392)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "CY",
                  value: "357",
                  children: "Cyprus South (+357)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "CZ",
                  value: "42",
                  children: "Czech Republic (+42)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "DK",
                  value: "45",
                  children: "Denmark (+45)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "DJ",
                  value: "253",
                  children: "Djibouti (+253)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "DM",
                  value: "1809",
                  children: "Dominica (+1809)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "DO",
                  value: "1809",
                  children: "Dominican Republic (+1809)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "EC",
                  value: "593",
                  children: "Ecuador (+593)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "EG",
                  value: "20",
                  children: "Egypt (+20)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "SV",
                  value: "503",
                  children: "El Salvador (+503)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "GQ",
                  value: "240",
                  children: "Equatorial Guinea (+240)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "ER",
                  value: "291",
                  children: "Eritrea (+291)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "EE",
                  value: "372",
                  children: "Estonia (+372)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "ET",
                  value: "251",
                  children: "Ethiopia (+251)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "FK",
                  value: "500",
                  children: "Falkland Islands (+500)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "FO",
                  value: "298",
                  children: "Faroe Islands (+298)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "FJ",
                  value: "679",
                  children: "Fiji (+679)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "FI",
                  value: "358",
                  children: "Finland (+358)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "FR",
                  value: "33",
                  children: "France (+33)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "GF",
                  value: "594",
                  children: "French Guiana (+594)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "PF",
                  value: "689",
                  children: "French Polynesia (+689)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "GA",
                  value: "241",
                  children: "Gabon (+241)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "GM",
                  value: "220",
                  children: "Gambia (+220)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "GE",
                  value: "7880",
                  children: "Georgia (+7880)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "DE",
                  value: "49",
                  children: "Germany (+49)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "GH",
                  value: "233",
                  children: "Ghana (+233)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "GI",
                  value: "350",
                  children: "Gibraltar (+350)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "GR",
                  value: "30",
                  children: "Greece (+30)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "GL",
                  value: "299",
                  children: "Greenland (+299)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "GD",
                  value: "1473",
                  children: "Grenada (+1473)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "GP",
                  value: "590",
                  children: "Guadeloupe (+590)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "GU",
                  value: "671",
                  children: "Guam (+671)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "GT",
                  value: "502",
                  children: "Guatemala (+502)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "GN",
                  value: "224",
                  children: "Guinea (+224)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "GW",
                  value: "245",
                  children: "Guinea - Bissau (+245)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "GY",
                  value: "592",
                  children: "Guyana (+592)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "HT",
                  value: "509",
                  children: "Haiti (+509)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "HN",
                  value: "504",
                  children: "Honduras (+504)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "HK",
                  value: "852",
                  children: "Hong Kong (+852)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "HU",
                  value: "36",
                  children: "Hungary (+36)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "IS",
                  value: "354",
                  children: "Iceland (+354)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "IN",
                  value: "91",
                  children: "India (+91)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "ID",
                  value: "62",
                  children: "Indonesia (+62)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "IR",
                  value: "98",
                  children: "Iran (+98)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "IQ",
                  value: "964",
                  children: "Iraq (+964)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "IE",
                  value: "353",
                  children: "Ireland (+353)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "IL",
                  value: "972",
                  children: "Israel (+972)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "IT",
                  value: "39",
                  children: "Italy (+39)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "JM",
                  value: "1876",
                  children: "Jamaica (+1876)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "JP",
                  value: "81",
                  children: "Japan (+81)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "JO",
                  value: "962",
                  children: "Jordan (+962)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "KZ",
                  value: "7",
                  children: "Kazakhstan (+7)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "KE",
                  value: "254",
                  children: "Kenya (+254)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "KI",
                  value: "686",
                  children: "Kiribati (+686)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "KP",
                  value: "850",
                  children: "Korea North (+850)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "KR",
                  value: "82",
                  children: "Korea South (+82)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "KW",
                  value: "965",
                  children: "Kuwait (+965)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "KG",
                  value: "996",
                  children: "Kyrgyzstan (+996)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "LA",
                  value: "856",
                  children: "Laos (+856)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "LV",
                  value: "371",
                  children: "Latvia (+371)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "LB",
                  value: "961",
                  children: "Lebanon (+961)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "LS",
                  value: "266",
                  children: "Lesotho (+266)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "LR",
                  value: "231",
                  children: "Liberia (+231)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "LY",
                  value: "218",
                  children: "Libya (+218)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "LI",
                  value: "417",
                  children: "Liechtenstein (+417)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "LT",
                  value: "370",
                  children: "Lithuania (+370)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "LU",
                  value: "352",
                  children: "Luxembourg (+352)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "MO",
                  value: "853",
                  children: "Macao (+853)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "MK",
                  value: "389",
                  children: "Macedonia (+389)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "MG",
                  value: "261",
                  children: "Madagascar (+261)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "MW",
                  value: "265",
                  children: "Malawi (+265)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "MY",
                  value: "60",
                  children: "Malaysia (+60)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "MV",
                  value: "960",
                  children: "Maldives (+960)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "ML",
                  value: "223",
                  children: "Mali (+223)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "MT",
                  value: "356",
                  children: "Malta (+356)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "MH",
                  value: "692",
                  children: "Marshall Islands (+692)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "MQ",
                  value: "596",
                  children: "Martinique (+596)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "MR",
                  value: "222",
                  children: "Mauritania (+222)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "YT",
                  value: "269",
                  children: "Mayotte (+269)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "MX",
                  value: "52",
                  children: "Mexico (+52)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "FM",
                  value: "691",
                  children: "Micronesia (+691)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "MD",
                  value: "373",
                  children: "Moldova (+373)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "MC",
                  value: "377",
                  children: "Monaco (+377)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "MN",
                  value: "976",
                  children: "Mongolia (+976)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "MS",
                  value: "1664",
                  children: "Montserrat (+1664)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "MA",
                  value: "212",
                  children: "Morocco (+212)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "MZ",
                  value: "258",
                  children: "Mozambique (+258)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "MN",
                  value: "95",
                  children: "Myanmar (+95)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "NA",
                  value: "264",
                  children: "Namibia (+264)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "NR",
                  value: "674",
                  children: "Nauru (+674)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "NP",
                  value: "977",
                  children: "Nepal (+977)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "NL",
                  value: "31",
                  children: "Netherlands (+31)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "NC",
                  value: "687",
                  children: "New Caledonia (+687)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "NZ",
                  value: "64",
                  children: "New Zealand (+64)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "NI",
                  value: "505",
                  children: "Nicaragua (+505)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "NE",
                  value: "227",
                  children: "Niger (+227)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "NG",
                  value: "234",
                  children: "Nigeria (+234)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "NU",
                  value: "683",
                  children: "Niue (+683)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "NF",
                  value: "672",
                  children: "Norfolk Islands (+672)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "NP",
                  value: "670",
                  children: "Northern Marianas (+670)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "NO",
                  value: "47",
                  children: "Norway (+47)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "OM",
                  value: "968",
                  children: "Oman (+968)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "PW",
                  value: "680",
                  children: "Palau (+680)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "PA",
                  value: "507",
                  children: "Panama (+507)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "PG",
                  value: "675",
                  children: "Papua New Guinea (+675)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "PY",
                  value: "595",
                  children: "Paraguay (+595)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "PE",
                  value: "51",
                  children: "Peru (+51)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "PH",
                  value: "63",
                  children: "Philippines (+63)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "PL",
                  value: "48",
                  children: "Poland (+48)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "PT",
                  value: "351",
                  children: "Portugal (+351)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "PR",
                  value: "1787",
                  children: "Puerto Rico (+1787)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "QA",
                  value: "974",
                  children: "Qatar (+974)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "RE",
                  value: "262",
                  children: "Reunion (+262)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "RO",
                  value: "40",
                  children: "Romania (+40)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "RU",
                  value: "7",
                  children: "Russia (+7)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "RW",
                  value: "250",
                  children: "Rwanda (+250)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "SM",
                  value: "378",
                  children: "San Marino (+378)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "ST",
                  value: "239",
                  children: "Sao Tome & Principe (+239)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "SA",
                  value: "966",
                  children: "Saudi Arabia (+966)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "SN",
                  value: "221",
                  children: "Senegal (+221)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "CS",
                  value: "381",
                  children: "Serbia (+381)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "SC",
                  value: "248",
                  children: "Seychelles (+248)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "SL",
                  value: "232",
                  children: "Sierra Leone (+232)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "SG",
                  value: "65",
                  children: "Singapore (+65)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "SK",
                  value: "421",
                  children: "Slovak Republic (+421)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "SI",
                  value: "386",
                  children: "Slovenia (+386)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "SB",
                  value: "677",
                  children: "Solomon Islands (+677)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "SO",
                  value: "252",
                  children: "Somalia (+252)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "ZA",
                  value: "27",
                  children: "South Africa (+27)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "ES",
                  value: "34",
                  children: "Spain (+34)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "LK",
                  value: "94",
                  children: "Sri Lanka (+94)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "SH",
                  value: "290",
                  children: "St. Helena (+290)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "KN",
                  value: "1869",
                  children: "St. Kitts (+1869)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "SC",
                  value: "1758",
                  children: "St. Lucia (+1758)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "SD",
                  value: "249",
                  children: "Sudan (+249)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "SR",
                  value: "597",
                  children: "Suriname (+597)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "SZ",
                  value: "268",
                  children: "Swaziland (+268)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "SE",
                  value: "46",
                  children: "Sweden (+46)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "CH",
                  value: "41",
                  children: "Switzerland (+41)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "SI",
                  value: "963",
                  children: "Syria (+963)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "TW",
                  value: "886",
                  children: "Taiwan (+886)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "TJ",
                  value: "7",
                  children: "Tajikstan (+7)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "TH",
                  value: "66",
                  children: "Thailand (+66)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "TG",
                  value: "228",
                  children: "Togo (+228)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "TO",
                  value: "676",
                  children: "Tonga (+676)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "TT",
                  value: "1868",
                  children: "Trinidad & Tobago (+1868)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "TN",
                  value: "216",
                  children: "Tunisia (+216)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "TR",
                  value: "90",
                  children: "Turkey (+90)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "TM",
                  value: "7",
                  children: "Turkmenistan (+7)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "TM",
                  value: "993",
                  children: "Turkmenistan (+993)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "TC",
                  value: "1649",
                  children: "Turks & Caicos Islands (+1649)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "TV",
                  value: "688",
                  children: "Tuvalu (+688)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "UG",
                  value: "256",
                  children: "Uganda (+256)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "GB",
                  value: "44",
                  children: "UK (+44)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "UA",
                  value: "380",
                  children: "Ukraine (+380)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "AE",
                  value: "971",
                  children: "United Arab Emirates (+971)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "UY",
                  value: "598",
                  children: "Uruguay (+598)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "US",
                  value: "1",
                  children: "USA (+1)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "UZ",
                  value: "7",
                  children: "Uzbekistan (+7)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "VU",
                  value: "678",
                  children: "Vanuatu (+678)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "VA",
                  value: "379",
                  children: "Vatican City (+379)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "VE",
                  value: "58",
                  children: "Venezuela (+58)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "VN",
                  value: "84",
                  children: "Vietnam (+84)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "VG",
                  value: "84",
                  children: "Virgin Islands - British (+1284)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "VI",
                  value: "84",
                  children: "Virgin Islands - US (+1340)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "WF",
                  value: "681",
                  children: "Wallis & Futuna (+681)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "YE",
                  value: "969",
                  children: "Yemen (North)(+969)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "YE",
                  value: "967",
                  children: "Yemen (South)(+967)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "ZM",
                  value: "260",
                  children: "Zambia (+260)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "ZW",
                  value: "263",
                  children: "Zimbabwe (+263)"
                })]
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("input", {
              type: "text",
              placeholder: this.state.userDetails.phoneNumber,
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.pH,
              value: this.state.newPhoneNumber,
              onChange: v => {
                this.setState({
                  newPhoneNumber: v.target.value
                });
              }
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("div", {
            className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.button1,
            style: {
              width: '30%'
            },
            onClick: () => {
              if (this.state.newPhoneNumber.length == 0) this.setState({
                error: true,
                errorMessage: 'Phone number must be valid'
              });else this.setState({
                changePhoneLoader: true
              }, () => {
                axios__WEBPACK_IMPORTED_MODULE_7___default.a.post(`https://us-central1-perch-01.cloudfunctions.net/checkIfPhoneNumberIsFree`, {
                  phoneNumber: `+${this.state.countryCode}${this.state.newPhoneNumber}`
                }).then(r => {
                  if (r.data) {
                    _functions_functions__WEBPACK_IMPORTED_MODULE_11__[/* changeEmailOrPhoneNumber */ "e"].call(this, 'phoneNumber', this.state.userDetails.userID, `+${this.state.countryCode}${this.state.newPhoneNumber}`, '');
                  } else this.setState({
                    error: true,
                    errorMessage: 'Phone number already in use'
                  });
                }).catch(error => {
                  this.setState({
                    error: true,
                    errorMessage: error.message
                  });
                });
              });
            },
            children: this.state.changePhoneLoader ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(react_loader_spinner__WEBPACK_IMPORTED_MODULE_12___default.a, {
              type: "TailSpin",
              color: WHITE,
              height: '20px',
              width: '20px'
            }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("p", {
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.buttonText1,
              children: "Change"
            })
          })]
        }), this.state.error ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(react_truncate__WEBPACK_IMPORTED_MODULE_9___default.a, {
          lines: 1,
          ellipsis: '...',
          className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.em,
          children: this.state.errorMessage
        }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["Fragment"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("a", {
          className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.fp_,
          onClick: () => {
            this.setState({
              changeEmail_PhoneNumber: false,
              error: false
            });
          },
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("p", {
            className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.fp,
            style: {
              color: 'red'
            },
            children: "Cancel"
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])("p", {
          className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cu_,
          children: ["Running into an issue? ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("a", {
            href: "/contact_us",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("span", {
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cu,
              children: "Contact us"
            })
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("p", {
          className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.ca,
          children: "Wrong account?"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("a", {
          className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.caC,
          onClick: () => {
            this.setState({
              email: '',
              password: '',
              displayVerification: false,
              isFlipped: false,
              changeEmail_PhoneNumber: false,
              error: false
            }, () => {
              _functions_functions__WEBPACK_IMPORTED_MODULE_11__[/* signOut */ "C"].call(this, true);
            });
          },
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("p", {
            className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.ca_,
            children: "Sign out"
          })
        })]
      }) : this.state.displayVerification ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])("div", {
        className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.card ///SIGN IN
        ,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("a", {
          className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.logo,
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_functions_images_vectors__WEBPACK_IMPORTED_MODULE_3__[/* Logo */ "c"], {
            color: '#4EB848'
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("p", {
          style: {
            marginBottom: '10px'
          },
          className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title,
          children: "Contact Verification"
        }), this.state.phoneVerified ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["Fragment"], {}) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])("p", {
            className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cvTitle,
            children: ["Enter the verification code sent to the number ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("span", {
              style: {
                color: "#4EB848",
                display: 'inline-block'
              },
              children: this.state.userDetails.phoneNumber
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])("div", {
            className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.inputCont_,
            style: {
              marginBottom: '5px'
            },
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])("div", {
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.inputContHalf,
              style: {
                width: '65%',
                marginBottom: '0px'
              },
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(react_icons_cg__WEBPACK_IMPORTED_MODULE_6__["CgKeyboard"], {
                color: '#4EB848',
                size: 20,
                style: {
                  marginRight: '10px',
                  marginLeft: '10px'
                }
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("input", {
                type: "text",
                placeholder: "Code",
                className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.pH,
                value: this.state.phoneVerificationCode,
                onChange: event => {
                  this.setState({
                    phoneVerificationCode: event.target.value
                  });
                }
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("div", {
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.button1,
              style: {
                width: '30%'
              },
              onClick: () => {
                if (!this.state.verificationPhoneLoader) {
                  if (this.state.phoneVerificationCode.length != 6) this.setState({
                    errorMessage: 'Code must be exactly 6 digits long',
                    error: true
                  });else this.setState({
                    verificationPhoneLoader: true
                  }, () => {
                    _functions_functions__WEBPACK_IMPORTED_MODULE_11__[/* sendVerification */ "A"].call(this, this.state.userDetails.userID, 'phoneNumber', 'check', this.state.phoneVerificationCode, this.state.userDetails.phoneNumber, this.state.userDetails.email, this.state.userDetails.firstName);
                  });
                }
              },
              children: this.state.verificationPhoneLoader ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(react_loader_spinner__WEBPACK_IMPORTED_MODULE_12___default.a, {
                type: "TailSpin",
                color: WHITE,
                height: '20px',
                width: '20px'
              }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("p", {
                className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.buttonText1,
                children: "Verify"
              })
            })]
          }), this.state.phoneNumberTimer == 0 ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])("p", {
            className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cvTitle,
            children: ["Didnt get the code yet? ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("span", {
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cursor,
              style: {
                color: "#005BEA",
                display: 'inline',
                fontFamily: 'Gilroy-Medium'
              },
              onClick: () => {
                if (!this.state.verificationPhoneLoader) this.resend('phoneNumber');
              },
              children: "Resend"
            })]
          }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])("p", {
            className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cvTitle,
            children: ["Resend in", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("span", {
              style: {
                color: "#005BEA",
                display: 'inline',
                fontFamily: 'Gilroy-Medium'
              },
              children: ` 0:${('0' + this.state.phoneNumberTimer).slice(-2)}`
            })]
          })]
        }), this.state.emailVerified ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["Fragment"], {}) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])("p", {
            className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cvTitle,
            style: {
              marginTop: '10px'
            },
            children: ["Enter the verification code sent to the email ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("span", {
              style: {
                color: "#4EB848",
                display: 'inline-block'
              },
              children: this.state.userDetails.email
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])("div", {
            className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.inputCont_,
            style: {
              marginBottom: '5px'
            },
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])("div", {
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.inputContHalf,
              style: {
                width: '65%',
                marginBottom: '0px'
              },
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(react_icons_cg__WEBPACK_IMPORTED_MODULE_6__["CgKeyboard"], {
                color: '#4EB848',
                size: 20,
                style: {
                  marginRight: '10px',
                  marginLeft: '10px'
                }
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("input", {
                type: "text",
                placeholder: "Code",
                className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.pH,
                value: this.state.emailVerificationCode,
                onChange: event => {
                  this.setState({
                    emailVerificationCode: event.target.value
                  });
                }
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("div", {
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.button1,
              style: {
                width: '30%'
              },
              onClick: () => {
                if (!this.state.verificationEmailLoader) {
                  if (this.state.emailVerificationCode.length != 6) this.setState({
                    errorMessage: 'Code must be exactly 6 digits long',
                    error: true
                  });else this.setState({
                    verificationEmailLoader: true
                  }, () => {
                    _functions_functions__WEBPACK_IMPORTED_MODULE_11__[/* sendVerification */ "A"].call(this, this.state.userDetails.userID, 'email', 'check', this.state.emailVerificationCode, this.state.userDetails.phoneNumber, this.state.userDetails.email, this.state.userDetails.firstName);
                  });
                }
              },
              children: this.state.verificationEmailLoader ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(react_loader_spinner__WEBPACK_IMPORTED_MODULE_12___default.a, {
                type: "TailSpin",
                color: WHITE,
                height: '20px',
                width: '20px'
              }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("p", {
                className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.buttonText1,
                children: "Verify"
              })
            })]
          }), this.state.emailTimer == 0 ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])("p", {
            className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cvTitle,
            children: ["Didnt get the code yet? ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("span", {
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cursor,
              style: {
                color: "#005BEA",
                display: 'inline',
                fontFamily: 'Gilroy-Medium'
              },
              onClick: () => {
                if (!this.state.verificationEmailLoader) this.resend('email');
              },
              children: "Resend"
            })]
          }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])("p", {
            className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cvTitle,
            children: ["Resend in", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("span", {
              style: {
                color: "#005BEA",
                display: 'inline',
                fontFamily: 'Gilroy-Medium'
              },
              children: ` 0:${('0' + this.state.emailTimer).slice(-2)}`
            })]
          })]
        }), this.state.error ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(react_truncate__WEBPACK_IMPORTED_MODULE_9___default.a, {
          lines: 1,
          ellipsis: '...',
          className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.em,
          children: this.state.errorMessage
        }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["Fragment"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("a", {
          className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.fp_,
          onClick: () => {
            this.setState({
              changeEmail_PhoneNumber: true,
              error: false
            });
          },
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("p", {
            className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.fp,
            style: {
              fontSize: 'smaller'
            },
            children: "Change phone number or email"
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])("div", {
          className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.inputCont_d,
          style: {
            marginTop: '30px'
          },
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])("p", {
            className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cu_,
            style: {
              margin: '0px'
            },
            children: ["Running into an issue? ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("a", {
              href: "/contact_us",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("span", {
                className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cu,
                style: {
                  color: '#4EB848'
                },
                children: "Contact us"
              })
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("p", {
            className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cu,
            style: {
              fontFamily: 'Gilroy-Semibold',
              color: '#FF0000',
              margin: '0px'
            },
            onClick: () => {
              this.setState({
                email: '',
                password: '',
                displayVerification: false,
                isFlipped: false,
                changeEmail_PhoneNumber: false,
                error: false
              }, () => {
                _functions_functions__WEBPACK_IMPORTED_MODULE_11__[/* signOut */ "C"].call(this, true);
              });
            },
            children: "Sign out"
          })]
        })]
      }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])(react_card_flip__WEBPACK_IMPORTED_MODULE_8___default.a, {
        isFlipped: this.state.isFlipped,
        flipDirection: "horizontal",
        cardZIndex: 2,
        containerStyle: {
          marginRight: '5vw'
        },
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])("div", {
          className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.card ///SIGN IN
          // style={{ marginRight: '0px' }}
          ,
          id: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.card_,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("a", {
            className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.logo,
            href: "/",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_functions_images_vectors__WEBPACK_IMPORTED_MODULE_3__[/* Logo */ "c"], {
              color: '#4EB848'
            })
          }), this.state.forgotPassword ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("p", {
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title,
              children: "Forgot Password"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])("div", {
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.inputCont,
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaEnvelope"], {
                color: '#4EB848',
                className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.env
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("input", {
                type: "text",
                placeholder: "Email",
                className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.pH,
                value: this.state.email,
                onChange: event => {
                  this.setState({
                    email: event.target.value
                  });
                }
              })]
            }), this.state.error ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(react_truncate__WEBPACK_IMPORTED_MODULE_9___default.a, {
              lines: 1,
              ellipsis: '...',
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.em,
              children: this.state.errorMessage
            }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["Fragment"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("a", {
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.button1,
              style: {
                marginTop: this.state.error ? '0px' : '25px'
              },
              onClick: () => {
                if (!this.state.loading) {
                  if (this.state.email == '') this.setState({
                    error: true,
                    errorMessage: 'Please enter your email'
                  });else _functions_functions__WEBPACK_IMPORTED_MODULE_11__[/* sendPasswordResetLink */ "y"].call(this, this.state.email);
                }
              },
              children: this.state.loading ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(react_loader_spinner__WEBPACK_IMPORTED_MODULE_12___default.a, {
                type: "TailSpin",
                color: WHITE,
                height: '20px',
                width: '20px'
              }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("p", {
                className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.buttonText1,
                children: "Send password reset link"
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("a", {
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.fp_,
              onClick: () => {
                this.setState({
                  forgotPassword: false,
                  errorMessage: '',
                  error: false
                });
              },
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("p", {
                className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.fp,
                children: "Go back"
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])("p", {
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cu_,
              children: ["Running into an issue? ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("a", {
                href: "/contact_us",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("span", {
                  className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cu,
                  children: "Contact us"
                })
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("p", {
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.ca,
              children: "Don't have an account"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("a", {
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.caC,
              onClick: () => {
                this.setState({
                  isFlipped: !this.state.isFlipped,
                  error: false,
                  errorMessage: ''
                }, () => {
                  this.setState({
                    forgotPassword: false
                  });
                });
              },
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("p", {
                className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.ca_,
                children: "Create a new account"
              })
            })]
          }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("p", {
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title,
              children: "Sign In"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])("div", {
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.inputCont,
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaEnvelope"], {
                color: '#4EB848',
                className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.env
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("input", {
                type: "text",
                placeholder: "Email",
                className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.pH,
                value: this.state.email,
                onChange: event => {
                  this.setState({
                    email: event.target.value
                  });
                }
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])("div", {
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.inputCont,
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__["BsFillLockFill"], {
                color: '#4EB848',
                className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.pad
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("input", {
                type: this.state.showPassword ? "text" : "password",
                placeholder: "Password",
                className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.pH_,
                value: this.state.password,
                onChange: event => {
                  this.setState({
                    password: event.target.value
                  });
                }
              }), this.state.showPassword ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__["BsEyeSlash"], {
                color: 'rgba(112, 112, 112, 0.9)',
                className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.eye,
                onClick: () => {
                  this.setState({
                    showPassword: !this.state.showPassword
                  });
                }
              }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__["BsEye"], {
                color: 'rgba(112, 112, 112, 0.9)',
                className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.eye,
                onClick: () => {
                  this.setState({
                    showPassword: !this.state.showPassword
                  });
                }
              })]
            }), this.state.error ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(react_truncate__WEBPACK_IMPORTED_MODULE_9___default.a, {
              lines: 1,
              ellipsis: '...',
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.em,
              children: this.state.errorMessage
            }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["Fragment"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("a", {
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.button1,
              style: {
                marginTop: this.state.error ? '0px' : '25px'
              },
              onClick: () => {
                if (!this.state.loading) {
                  if (this.state.email == '') this.setState({
                    error: true,
                    errorMessage: 'Please enter your email'
                  });else if (this.state.password == '') this.setState({
                    error: true,
                    errorMessage: 'Please enter your password'
                  });else _functions_functions__WEBPACK_IMPORTED_MODULE_11__[/* signIn */ "B"].call(this, this.state.email, this.state.password, 'driver');
                }
              },
              children: this.state.loading ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(react_loader_spinner__WEBPACK_IMPORTED_MODULE_12___default.a, {
                type: "TailSpin",
                color: WHITE,
                height: '20px',
                width: '20px'
              }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("p", {
                className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.buttonText1,
                children: "Log in"
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("a", {
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.fp_,
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("p", {
                className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.fp,
                onClick: () => {
                  this.setState({
                    forgotPassword: true,
                    errorMessage: '',
                    error: false
                  });
                },
                children: "Forgot password?"
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])("p", {
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cu_,
              children: ["Running into an issue? ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("a", {
                href: "/contact_us",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("span", {
                  className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cu,
                  children: "Contact us"
                })
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("p", {
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.ca,
              children: "Don't have an account"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("a", {
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.caC,
              onClick: () => {
                this.setState({
                  isFlipped: !this.state.isFlipped,
                  error: false
                });
              },
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("p", {
                className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.ca_,
                children: "Create a new account"
              })
            })]
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])("div", {
          className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.card //SIGN UP
          //style={{ marginRight: '0px' }}
          ,
          id: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.card_,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("a", {
            className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.logo,
            href: "/",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_functions_images_vectors__WEBPACK_IMPORTED_MODULE_3__[/* Logo */ "c"], {
              color: '#4EB848'
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("p", {
            className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title,
            children: "Sign up"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])("div", {
            className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.inputCont_,
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("div", {
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.inputContHalf,
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("input", {
                type: "text",
                placeholder: "First Name",
                className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.pH,
                value: this.state.firstName,
                onChange: event => {
                  this.setState({
                    firstName: event.target.value
                  });
                }
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("div", {
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.inputContHalf,
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("input", {
                type: "text",
                placeholder: "Last Name",
                className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.pH,
                value: this.state.lastName,
                onChange: event => {
                  this.setState({
                    lastName: event.target.value
                  });
                }
              })
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("div", {
            className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.inputCont,
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("input", {
              type: "text",
              placeholder: "Email",
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.pH_,
              value: this.state.email1,
              onChange: event => {
                this.setState({
                  email1: event.target.value
                });
              }
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])("div", {
            className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.inputCont,
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])("select", {
              value: `+${this.state.countryCode}`,
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.countryCodeBox,
              onChange: v => {
                this.setState({
                  countryCode: v.target.value
                });
              },
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                value: "",
                style: {
                  display: 'none'
                },
                children: `+${this.state.countryCode}`
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                "data-countryCode": "CA",
                value: "1",
                children: "Canada (+1)"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])("optgroup", {
                label: "Other countries",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "DZ",
                  value: "213",
                  children: "Algeria (+213)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "AD",
                  value: "376",
                  children: "Andorra (+376)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "AO",
                  value: "244",
                  children: "Angola (+244)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "AI",
                  value: "1264",
                  children: "Anguilla (+1264)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "AG",
                  value: "1268",
                  children: "Antigua & Barbuda (+1268)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "AR",
                  value: "54",
                  children: "Argentina (+54)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "AM",
                  value: "374",
                  children: "Armenia (+374)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "AW",
                  value: "297",
                  children: "Aruba (+297)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "AU",
                  value: "61",
                  children: "Australia (+61)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "AT",
                  value: "43",
                  children: "Austria (+43)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "AZ",
                  value: "994",
                  children: "Azerbaijan (+994)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "BS",
                  value: "1242",
                  children: "Bahamas (+1242)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "BH",
                  value: "973",
                  children: "Bahrain (+973)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "BD",
                  value: "880",
                  children: "Bangladesh (+880)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "BB",
                  value: "1246",
                  children: "Barbados (+1246)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "BY",
                  value: "375",
                  children: "Belarus (+375)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "BE",
                  value: "32",
                  children: "Belgium (+32)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "BZ",
                  value: "501",
                  children: "Belize (+501)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "BJ",
                  value: "229",
                  children: "Benin (+229)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "BM",
                  value: "1441",
                  children: "Bermuda (+1441)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "BT",
                  value: "975",
                  children: "Bhutan (+975)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "BO",
                  value: "591",
                  children: "Bolivia (+591)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "BA",
                  value: "387",
                  children: "Bosnia Herzegovina (+387)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "BW",
                  value: "267",
                  children: "Botswana (+267)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "BR",
                  value: "55",
                  children: "Brazil (+55)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "BN",
                  value: "673",
                  children: "Brunei (+673)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "BG",
                  value: "359",
                  children: "Bulgaria (+359)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "BF",
                  value: "226",
                  children: "Burkina Faso (+226)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "BI",
                  value: "257",
                  children: "Burundi (+257)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "KH",
                  value: "855",
                  children: "Cambodia (+855)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "CM",
                  value: "237",
                  children: "Cameroon (+237)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "CA",
                  value: "1",
                  children: "Canada (+1)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "CV",
                  value: "238",
                  children: "Cape Verde Islands (+238)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "KY",
                  value: "1345",
                  children: "Cayman Islands (+1345)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "CF",
                  value: "236",
                  children: "Central African Republic (+236)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "CL",
                  value: "56",
                  children: "Chile (+56)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "CN",
                  value: "86",
                  children: "China (+86)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "CO",
                  value: "57",
                  children: "Colombia (+57)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "KM",
                  value: "269",
                  children: "Comoros (+269)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "CG",
                  value: "242",
                  children: "Congo (+242)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "CK",
                  value: "682",
                  children: "Cook Islands (+682)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "CR",
                  value: "506",
                  children: "Costa Rica (+506)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "HR",
                  value: "385",
                  children: "Croatia (+385)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "CU",
                  value: "53",
                  children: "Cuba (+53)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "CY",
                  value: "90392",
                  children: "Cyprus North (+90392)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "CY",
                  value: "357",
                  children: "Cyprus South (+357)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "CZ",
                  value: "42",
                  children: "Czech Republic (+42)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "DK",
                  value: "45",
                  children: "Denmark (+45)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "DJ",
                  value: "253",
                  children: "Djibouti (+253)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "DM",
                  value: "1809",
                  children: "Dominica (+1809)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "DO",
                  value: "1809",
                  children: "Dominican Republic (+1809)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "EC",
                  value: "593",
                  children: "Ecuador (+593)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "EG",
                  value: "20",
                  children: "Egypt (+20)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "SV",
                  value: "503",
                  children: "El Salvador (+503)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "GQ",
                  value: "240",
                  children: "Equatorial Guinea (+240)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "ER",
                  value: "291",
                  children: "Eritrea (+291)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "EE",
                  value: "372",
                  children: "Estonia (+372)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "ET",
                  value: "251",
                  children: "Ethiopia (+251)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "FK",
                  value: "500",
                  children: "Falkland Islands (+500)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "FO",
                  value: "298",
                  children: "Faroe Islands (+298)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "FJ",
                  value: "679",
                  children: "Fiji (+679)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "FI",
                  value: "358",
                  children: "Finland (+358)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "FR",
                  value: "33",
                  children: "France (+33)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "GF",
                  value: "594",
                  children: "French Guiana (+594)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "PF",
                  value: "689",
                  children: "French Polynesia (+689)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "GA",
                  value: "241",
                  children: "Gabon (+241)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "GM",
                  value: "220",
                  children: "Gambia (+220)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "GE",
                  value: "7880",
                  children: "Georgia (+7880)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "DE",
                  value: "49",
                  children: "Germany (+49)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "GH",
                  value: "233",
                  children: "Ghana (+233)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "GI",
                  value: "350",
                  children: "Gibraltar (+350)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "GR",
                  value: "30",
                  children: "Greece (+30)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "GL",
                  value: "299",
                  children: "Greenland (+299)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "GD",
                  value: "1473",
                  children: "Grenada (+1473)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "GP",
                  value: "590",
                  children: "Guadeloupe (+590)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "GU",
                  value: "671",
                  children: "Guam (+671)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "GT",
                  value: "502",
                  children: "Guatemala (+502)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "GN",
                  value: "224",
                  children: "Guinea (+224)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "GW",
                  value: "245",
                  children: "Guinea - Bissau (+245)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "GY",
                  value: "592",
                  children: "Guyana (+592)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "HT",
                  value: "509",
                  children: "Haiti (+509)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "HN",
                  value: "504",
                  children: "Honduras (+504)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "HK",
                  value: "852",
                  children: "Hong Kong (+852)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "HU",
                  value: "36",
                  children: "Hungary (+36)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "IS",
                  value: "354",
                  children: "Iceland (+354)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "IN",
                  value: "91",
                  children: "India (+91)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "ID",
                  value: "62",
                  children: "Indonesia (+62)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "IR",
                  value: "98",
                  children: "Iran (+98)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "IQ",
                  value: "964",
                  children: "Iraq (+964)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "IE",
                  value: "353",
                  children: "Ireland (+353)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "IL",
                  value: "972",
                  children: "Israel (+972)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "IT",
                  value: "39",
                  children: "Italy (+39)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "JM",
                  value: "1876",
                  children: "Jamaica (+1876)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "JP",
                  value: "81",
                  children: "Japan (+81)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "JO",
                  value: "962",
                  children: "Jordan (+962)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "KZ",
                  value: "7",
                  children: "Kazakhstan (+7)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "KE",
                  value: "254",
                  children: "Kenya (+254)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "KI",
                  value: "686",
                  children: "Kiribati (+686)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "KP",
                  value: "850",
                  children: "Korea North (+850)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "KR",
                  value: "82",
                  children: "Korea South (+82)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "KW",
                  value: "965",
                  children: "Kuwait (+965)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "KG",
                  value: "996",
                  children: "Kyrgyzstan (+996)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "LA",
                  value: "856",
                  children: "Laos (+856)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "LV",
                  value: "371",
                  children: "Latvia (+371)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "LB",
                  value: "961",
                  children: "Lebanon (+961)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "LS",
                  value: "266",
                  children: "Lesotho (+266)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "LR",
                  value: "231",
                  children: "Liberia (+231)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "LY",
                  value: "218",
                  children: "Libya (+218)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "LI",
                  value: "417",
                  children: "Liechtenstein (+417)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "LT",
                  value: "370",
                  children: "Lithuania (+370)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "LU",
                  value: "352",
                  children: "Luxembourg (+352)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "MO",
                  value: "853",
                  children: "Macao (+853)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "MK",
                  value: "389",
                  children: "Macedonia (+389)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "MG",
                  value: "261",
                  children: "Madagascar (+261)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "MW",
                  value: "265",
                  children: "Malawi (+265)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "MY",
                  value: "60",
                  children: "Malaysia (+60)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "MV",
                  value: "960",
                  children: "Maldives (+960)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "ML",
                  value: "223",
                  children: "Mali (+223)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "MT",
                  value: "356",
                  children: "Malta (+356)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "MH",
                  value: "692",
                  children: "Marshall Islands (+692)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "MQ",
                  value: "596",
                  children: "Martinique (+596)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "MR",
                  value: "222",
                  children: "Mauritania (+222)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "YT",
                  value: "269",
                  children: "Mayotte (+269)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "MX",
                  value: "52",
                  children: "Mexico (+52)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "FM",
                  value: "691",
                  children: "Micronesia (+691)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "MD",
                  value: "373",
                  children: "Moldova (+373)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "MC",
                  value: "377",
                  children: "Monaco (+377)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "MN",
                  value: "976",
                  children: "Mongolia (+976)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "MS",
                  value: "1664",
                  children: "Montserrat (+1664)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "MA",
                  value: "212",
                  children: "Morocco (+212)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "MZ",
                  value: "258",
                  children: "Mozambique (+258)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "MN",
                  value: "95",
                  children: "Myanmar (+95)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "NA",
                  value: "264",
                  children: "Namibia (+264)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "NR",
                  value: "674",
                  children: "Nauru (+674)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "NP",
                  value: "977",
                  children: "Nepal (+977)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "NL",
                  value: "31",
                  children: "Netherlands (+31)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "NC",
                  value: "687",
                  children: "New Caledonia (+687)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "NZ",
                  value: "64",
                  children: "New Zealand (+64)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "NI",
                  value: "505",
                  children: "Nicaragua (+505)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "NE",
                  value: "227",
                  children: "Niger (+227)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "NG",
                  value: "234",
                  children: "Nigeria (+234)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "NU",
                  value: "683",
                  children: "Niue (+683)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "NF",
                  value: "672",
                  children: "Norfolk Islands (+672)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "NP",
                  value: "670",
                  children: "Northern Marianas (+670)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "NO",
                  value: "47",
                  children: "Norway (+47)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "OM",
                  value: "968",
                  children: "Oman (+968)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "PW",
                  value: "680",
                  children: "Palau (+680)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "PA",
                  value: "507",
                  children: "Panama (+507)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "PG",
                  value: "675",
                  children: "Papua New Guinea (+675)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "PY",
                  value: "595",
                  children: "Paraguay (+595)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "PE",
                  value: "51",
                  children: "Peru (+51)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "PH",
                  value: "63",
                  children: "Philippines (+63)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "PL",
                  value: "48",
                  children: "Poland (+48)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "PT",
                  value: "351",
                  children: "Portugal (+351)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "PR",
                  value: "1787",
                  children: "Puerto Rico (+1787)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "QA",
                  value: "974",
                  children: "Qatar (+974)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "RE",
                  value: "262",
                  children: "Reunion (+262)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "RO",
                  value: "40",
                  children: "Romania (+40)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "RU",
                  value: "7",
                  children: "Russia (+7)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "RW",
                  value: "250",
                  children: "Rwanda (+250)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "SM",
                  value: "378",
                  children: "San Marino (+378)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "ST",
                  value: "239",
                  children: "Sao Tome & Principe (+239)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "SA",
                  value: "966",
                  children: "Saudi Arabia (+966)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "SN",
                  value: "221",
                  children: "Senegal (+221)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "CS",
                  value: "381",
                  children: "Serbia (+381)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "SC",
                  value: "248",
                  children: "Seychelles (+248)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "SL",
                  value: "232",
                  children: "Sierra Leone (+232)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "SG",
                  value: "65",
                  children: "Singapore (+65)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "SK",
                  value: "421",
                  children: "Slovak Republic (+421)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "SI",
                  value: "386",
                  children: "Slovenia (+386)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "SB",
                  value: "677",
                  children: "Solomon Islands (+677)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "SO",
                  value: "252",
                  children: "Somalia (+252)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "ZA",
                  value: "27",
                  children: "South Africa (+27)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "ES",
                  value: "34",
                  children: "Spain (+34)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "LK",
                  value: "94",
                  children: "Sri Lanka (+94)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "SH",
                  value: "290",
                  children: "St. Helena (+290)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "KN",
                  value: "1869",
                  children: "St. Kitts (+1869)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "SC",
                  value: "1758",
                  children: "St. Lucia (+1758)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "SD",
                  value: "249",
                  children: "Sudan (+249)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "SR",
                  value: "597",
                  children: "Suriname (+597)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "SZ",
                  value: "268",
                  children: "Swaziland (+268)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "SE",
                  value: "46",
                  children: "Sweden (+46)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "CH",
                  value: "41",
                  children: "Switzerland (+41)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "SI",
                  value: "963",
                  children: "Syria (+963)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "TW",
                  value: "886",
                  children: "Taiwan (+886)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "TJ",
                  value: "7",
                  children: "Tajikstan (+7)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "TH",
                  value: "66",
                  children: "Thailand (+66)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "TG",
                  value: "228",
                  children: "Togo (+228)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "TO",
                  value: "676",
                  children: "Tonga (+676)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "TT",
                  value: "1868",
                  children: "Trinidad & Tobago (+1868)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "TN",
                  value: "216",
                  children: "Tunisia (+216)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "TR",
                  value: "90",
                  children: "Turkey (+90)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "TM",
                  value: "7",
                  children: "Turkmenistan (+7)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "TM",
                  value: "993",
                  children: "Turkmenistan (+993)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "TC",
                  value: "1649",
                  children: "Turks & Caicos Islands (+1649)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "TV",
                  value: "688",
                  children: "Tuvalu (+688)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "UG",
                  value: "256",
                  children: "Uganda (+256)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "GB",
                  value: "44",
                  children: "UK (+44)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "UA",
                  value: "380",
                  children: "Ukraine (+380)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "AE",
                  value: "971",
                  children: "United Arab Emirates (+971)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "UY",
                  value: "598",
                  children: "Uruguay (+598)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "US",
                  value: "1",
                  children: "USA (+1)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "UZ",
                  value: "7",
                  children: "Uzbekistan (+7)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "VU",
                  value: "678",
                  children: "Vanuatu (+678)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "VA",
                  value: "379",
                  children: "Vatican City (+379)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "VE",
                  value: "58",
                  children: "Venezuela (+58)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "VN",
                  value: "84",
                  children: "Vietnam (+84)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "VG",
                  value: "84",
                  children: "Virgin Islands - British (+1284)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "VI",
                  value: "84",
                  children: "Virgin Islands - US (+1340)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "WF",
                  value: "681",
                  children: "Wallis & Futuna (+681)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "YE",
                  value: "969",
                  children: "Yemen (North)(+969)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "YE",
                  value: "967",
                  children: "Yemen (South)(+967)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "ZM",
                  value: "260",
                  children: "Zambia (+260)"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("option", {
                  "data-countryCode": "ZW",
                  value: "263",
                  children: "Zimbabwe (+263)"
                })]
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("input", {
              type: "text",
              placeholder: "Phone Number",
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.pH_,
              value: this.state.phoneNumber,
              onChange: event => {
                this.setState({
                  phoneNumber: event.target.value
                });
              }
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])("div", {
            className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.inputCont_,
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])("div", {
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.inputContHalf,
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("input", {
                type: this.state.showPassword1 ? "text" : "password",
                placeholder: "Password",
                className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.pH,
                value: this.state.password1,
                onChange: event => {
                  this.setState({
                    password1: event.target.value
                  });
                }
              }), this.state.showPassword1 ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__["BsEyeSlash"], {
                color: 'rgba(112, 112, 112, 0.9)',
                className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.eye,
                onClick: () => {
                  this.setState({
                    showPassword1: !this.state.showPassword1
                  });
                }
              }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__["BsEye"], {
                color: 'rgba(112, 112, 112, 0.9)',
                className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.eye,
                onClick: () => {
                  this.setState({
                    showPassword1: !this.state.showPassword1
                  });
                }
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])("div", {
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.inputContHalf,
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("input", {
                type: this.state.showPassword2 ? "text" : "password",
                placeholder: "Confirm Password",
                className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.pH,
                value: this.state.confirmPassword,
                onChange: event => {
                  this.setState({
                    confirmPassword: event.target.value
                  });
                }
              }), this.state.showPassword2 ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__["BsEyeSlash"], {
                color: 'rgba(112, 112, 112, 0.9)',
                className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.eye,
                onClick: () => {
                  this.setState({
                    showPassword2: !this.state.showPassword2
                  });
                }
              }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__["BsEye"], {
                color: 'rgba(112, 112, 112, 0.9)',
                className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.eye,
                onClick: () => {
                  this.setState({
                    showPassword2: !this.state.showPassword2
                  });
                }
              })]
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("div", {
            className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.inputCont,
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("input", {
              type: "text",
              placeholder: "Referral code ( Optional )",
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.pH_,
              value: this.state.referralCode,
              onChange: event => {
                this.setState({
                  referralCode: event.target.value
                });
              }
            })
          }), this.state.error ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(react_truncate__WEBPACK_IMPORTED_MODULE_9___default.a, {
            lines: 1,
            ellipsis: '...',
            className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.em,
            children: this.state.errorMessage
          }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["Fragment"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("a", {
            className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.button1,
            onClick: () => {
              if (!this.state.loading) {
                if (this.state.firstName == '') this.setState({
                  error: true,
                  errorMessage: 'Please enter your first name'
                });else if (this.state.lastName == '') this.setState({
                  error: true,
                  errorMessage: 'Please enter your last name'
                });else if (this.state.email1 == '') this.setState({
                  error: true,
                  errorMessage: 'Please enter your email address'
                });else if (this.state.phoneNumber == '') this.setState({
                  error: true,
                  errorMessage: 'Please enter your phone number'
                });else if (this.state.password1 == '') this.setState({
                  error: true,
                  errorMessage: 'Please enter a password'
                });else if (this.state.password1 !== this.state.confirmPassword) this.setState({
                  error: true,
                  errorMessage: 'Passwords do not match',
                  confirmPassword: ''
                });else _functions_functions__WEBPACK_IMPORTED_MODULE_11__[/* signUp */ "D"].call(this, this.state.firstName, this.state.lastName, this.state.email1, this.state.countryCode, this.state.phoneNumber, this.state.password1, true, this.state.referralCode);
              }
            },
            children: this.state.loading ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(react_loader_spinner__WEBPACK_IMPORTED_MODULE_12___default.a, {
              type: "TailSpin",
              color: WHITE,
              height: '20px',
              width: '20px'
            }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("p", {
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.buttonText1,
              children: "Sign up"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])("p", {
            style: {
              marginTop: '10px'
            },
            className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cu_,
            children: ["Running into an issue? ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("a", {
              href: "/contact_us",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("span", {
                className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cu,
                children: "Contact us"
              })
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("p", {
            className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.ca,
            children: "Have an account ?"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("a", {
            className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.caC,
            onClick: () => {
              this.setState({
                isFlipped: !this.state.isFlipped,
                error: false
              });
            },
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])("p", {
              className: _layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.ca_,
              children: "Log in"
            })
          })]
        })]
      })]
    });
  }

}

/***/ }),

/***/ "mTxg":
/***/ (function(module, exports) {

module.exports = require("react-icons/cg");

/***/ }),

/***/ "pNaP":
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });