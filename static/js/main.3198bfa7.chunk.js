(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,n,t){e.exports=t(68)},67:function(e,n,t){},68:function(e,n,t){"use strict";t.r(n);var r={};t.r(r),t.d(r,"setType",function(){return Q}),t.d(r,"setDifficulty",function(){return G}),t.d(r,"setLenght",function(){return I}),t.d(r,"setPlayerName",function(){return H}),t.d(r,"addPoint",function(){return N}),t.d(r,"finishGame",function(){return k}),t.d(r,"startGame",function(){return F}),t.d(r,"setNewGame",function(){return T}),t.d(r,"setHighScore",function(){return P}),t.d(r,"setGameDifficulty",function(){return z}),t.d(r,"setGameLenght",function(){return R}),t.d(r,"setQuestionsType",function(){return D});var a={};t.r(a),t.d(a,"setQuestionsArray",function(){return U}),t.d(a,"changeCurrentQuestion",function(){return _}),t.d(a,"answerQuestion",function(){return B}),t.d(a,"getQuestsions",function(){return V});var i=t(0),u=t.n(i),o=t(13),c=t.n(o),s=t(29),l=t(5),d=t(9),f=t(33),m=t(2),g=t(1);function p(){var e=Object(m.a)(["\n  display: grid;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n"]);return p=function(){return e},e}function b(){var e=Object(m.a)(["\n  display: grid;\n  width: 375px;\n  height: 812px;\n  grid-template-rows: 10% 90%;\n  border: 2px dashed gray;\n  border-radius: 5px;\n  box-sizing: border-box;\n"]);return b=function(){return e},e}var h,y,E,v=g.default.div(b()),w=g.default.div(p()),x=t(3),O=t(6),q=t.n(O),j=t(7),A=t.n(j),S=t(12);!function(e){e.EASY="easy",e.MEDIUM="medium",e.HARD="hard"}(h||(h={})),function(e){e.SINGLE="boolean",e.MULTI="multiple"}(y||(y={})),function(e){e[e.SHORT=5]="SHORT",e[e.AVERAGE=10]="AVERAGE",e[e.LONG=15]="LONG"}(E||(E={}));var L={difficulty:h.EASY,gameFinished:!1,gameInProgress:!1,gameLenght:E.SHORT,highScore:0,isLoading:!1,playerName:"",questionsType:y.SINGLE,score:0},Q=function(e){return{questionsType:e,type:"@game/SetType"}},G=function(e){return{difficulty:e,type:"@game/SetDifficulty"}},I=function(e){return{gameLenght:e,type:"@game/SetLenght"}},H=function(e){return{playerName:e,type:"@game/SetPlayerName"}},N=function(){return{type:"@game/AddPoint"}},k=function(){return{type:"@game/FinishGame"}},F=function(){return{type:"@game/StartGame"}},T=function(){return{type:"@game/SetNewGame"}},P=function(e){return{highScore:e,type:"game/SetHighScore"}},z=function(e){return function(){var n=Object(S.a)(A.a.mark(function n(t,r){var a,i;return A.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(a=r(),i=a.game.difficulty,"Harder"!==e){n.next=6;break}return i===h.EASY&&t(G(h.MEDIUM)),i===h.MEDIUM&&t(G(h.HARD)),n.abrupt("return",null);case 6:return i===h.HARD&&t(G(h.MEDIUM)),i===h.MEDIUM&&t(G(h.EASY)),n.abrupt("return",null);case 9:case"end":return n.stop()}},n)}));return function(e,t){return n.apply(this,arguments)}}()},R=function(e){return function(){var n=Object(S.a)(A.a.mark(function n(t,r){var a,i;return A.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(a=r(),i=a.game.gameLenght,"Longer"!==e){n.next=6;break}return i===E.AVERAGE&&t(I(E.LONG)),i===E.SHORT&&t(I(E.AVERAGE)),n.abrupt("return",null);case 6:return i===E.LONG&&t(I(E.AVERAGE)),i===E.AVERAGE&&t(I(E.SHORT)),n.abrupt("return",null);case 9:case"end":return n.stop()}},n)}));return function(e,t){return n.apply(this,arguments)}}()},D=function(e){return function(){var n=Object(S.a)(A.a.mark(function n(t){return A.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if("Complex"!==e){n.next=2;break}return n.abrupt("return",t(Q(y.MULTI)));case 2:t(Q(y.SINGLE));case 3:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()},M=t(34),C=t.n(M),U=function(e){return{questionsArray:e,type:"@question/SetQuestionsArray"}},_=function(e){return{currentQuestionId:e,type:"@question/ChangeCurrentQuestion"}},B=function(e,n){return{answer:n,questionId:e,type:"@question/AnswerQuestion"}},V=function(){return function(){var e=Object(S.a)(A.a.mark(function e(n,t){var r,a,i,u,o,c,s;return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:"@question/GetQuestionsRequested"}),r=t(),e.prev=2,"https://opentdb.com/api.php?",a=r.game.difficulty,i=r.game.gameLenght,u=r.game.questionsType,o="https://opentdb.com/api.php?".concat("amount=".concat(i,"&difficulty=").concat(a,"&type=").concat(u)),e.next=10,C.a.get(o);case 10:if(0===(c=e.sent).data.response_code){e.next=13;break}return e.abrupt("return",n({type:"@question/GetQuestionsFailed"}));case 13:s=[],c.data.results.map(function(e,n){s.push({category:e.category,correctAnswer:e.correct_answer,difficulty:e.difficulty,id:n,incorrectAnswers:e.incorrect_answers,question:e.question,type:e.type,userAnswer:""})}),n(U(s)),n({type:"@question/GetQuestionsSuccess"}),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(2),n({type:"@question/GetQuestionsFailed"});case 22:case"end":return e.stop()}},e,null,[[2,19]])}));return function(n,t){return e.apply(this,arguments)}}()},Y={game:r,question:a},J={activeFont:"rgba(75, 75, 75, 1)",disabledBackground:"#bbb",inactiveFont:"rgba(132, 132, 132, 0.75)"};function X(){var e=Object(m.a)(["\n  height: 70px;\n"]);return X=function(){return e},e}function K(){var e=Object(m.a)(["\n  display: grid;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n  padding: 5px;\n  font-size: 25px;\n  font-weight: bold;\n  border: 2px dashed white;\n  border-radius: 10px;\n  background-color: orange;\n  justify-self: center;\n  text-transform: uppercase;\n  color: white;\n\n  &:disabled,\n   &--disabled {\n     color: ",";\n     background-color: ",";\n     pointer-events: none;\n  }\n"]);return K=function(){return e},e}var W=g.default.button(K(),J.inactiveFont,J.disabledBackground),Z=Object(g.default)(W)(X()),$=function(e){return e.isActionButton?u.a.createElement(Z,{disabled:e.disabled,onClick:e.buttonHandler},e.children):u.a.createElement(W,{disabled:e.disabled,onClick:e.buttonHandler},e.children)};$.defaultProps={disabled:!1};var ee=$;function ne(){var e=Object(m.a)(["\n  position: absolute;\n  top: 20px;\n  width: 11px;\n  height: 11px;\n  animation-timing-function: cubic-bezier(0, 1, 1, 0);\n  background: #424242;\n  border-radius: 50%;\n\n  :nth-child(1) {\n    left: 6px;\n    animation: loaderEllipsisAppear 0.6s infinite;\n  }\n\n  :nth-child(2) {\n    left: 6px;\n    animation: loaderEllipsisMove 0.6s infinite;\n  }\n:nth-child(3) {\n    left: 26px;\n    animation: loaderEllipsisMove 0.6s infinite;\n  }\n:nth-child(4) {\n    left: 45px;\n    animation: loaderEllipsisDisappear 0.6s infinite;\n  }\n  @keyframes loaderEllipsisAppear {\n  0% {\n    transform: scale(0);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n}\n\n  @keyframes loaderEllipsisDisappear {\n    0% {\n      transform: scale(1);\n    }\n\n    100% {\n      transform: scale(0);\n    }\n  }\n\n  @keyframes loaderEllipsisMove {\n    0% {\n      transform: translate(0, 0);\n    }\n\n    100% {\n      transform: translate(19px, 0);\n    }\n}\n"]);return ne=function(){return e},e}function te(){var e=Object(m.a)(["\n  position: relative;\n  display: inline-block;\n  width: 64px;\n  height: 40px;\n  margin: 0 auto;\n"]);return te=function(){return e},e}var re=g.default.div(te()),ae=g.default.div(ne()),ie=function(){return u.a.createElement(re,null,u.a.createElement(ae,null),u.a.createElement(ae,null),u.a.createElement(ae,null),u.a.createElement(ae,null))};function ue(){var e=Object(m.a)(["\n  display: grid;\n  place-items: center;\n  color: ",";\n  font-size: 2em;\n  text-align: center;\n"]);return ue=function(){return e},e}var oe=g.default.div(ue(),J.activeFont),ce=function(e){return u.a.createElement(oe,null,q.a.decode(e.question))};ce.defaultProps={question:""};var se=ce;function le(){var e=Object(m.a)(["\n  display: grid;\n  grid-row-gap: 10px;\n  width: 100%;\n  height: 100%;\n  place-items: center;\n  box-sizing: border-box;\n"]);return le=function(){return e},e}function de(){var e=Object(m.a)(["\n  text-align: center;\n  font-size: 1.5em;\n  text-transform: uppercase;\n  font-style: italic;\n  color: ",";\n"]);return de=function(){return e},e}function fe(){var e=Object(m.a)(["\n  grid-template-rows: 1fr;\n"]);return fe=function(){return e},e}function me(){var e=Object(m.a)(["\n  display: grid;\n  width: 100%;\n  height: 100%;\n  grid-template-rows: 10% 45% 45%;\n  padding: 5%;\n  align-items: center;\n  box-sizing: border-box;\n"]);return me=function(){return e},e}var ge=g.default.div(me()),pe=Object(g.default)(ge)(fe()),be=g.default.div(de(),J.activeFont),he=g.default.div(le()),ye=Object(l.b)(function(e){return{currentQuestionId:e.questions.currentQuestionId,highScore:e.game.highScore,isLoading:e.questions.isLoading,questionsArray:e.questions.questionsArray,score:e.game.score}},function(e){return{addPoint:function(){return e(Y.game.addPoint())},answerQuestion:function(n,t){return e(Y.question.answerQuestion(n,t))},changeCurrentQuestion:function(n){return e(Y.question.changeCurrentQuestion(n))},finishGame:function(){return e(Y.game.finishGame())},getQuestions:function(){return e(Y.question.getQuestsions())},setHighScore:function(n){return e(Y.game.setHighScore(n))}}})(function(e){var n=function(n,r){return function(){e.answerQuestion(n,r);var a=e.questionsArray[e.currentQuestionId].correctAnswer;r===a&&e.addPoint(),e.questionsArray.length===e.currentQuestionId+1&&(t(),e.finishGame()),e.changeCurrentQuestion(e.currentQuestionId+1)}},t=function(){var n=e.score/e.questionsArray.length*100;n>e.highScore&&e.setHighScore(n)},r=Object(x.a)({},e),a=r.questionsArray,i=r.currentQuestionId;if(e.questionsArray.length>0&&!e.isLoading){var o=[],c=a[i];return o=function(e){return e.incorrectAnswers.concat(e.correctAnswer).sort(function(e,n){return.5-Math.random()})}(c),u.a.createElement(ge,null,u.a.createElement(be,null,c.category),u.a.createElement(se,{question:c.question}),u.a.createElement(he,null,o.map(function(e){return u.a.createElement(ee,{isActionButton:!0,key:e,buttonHandler:n(i,e)},q.a.decode(e))})))}return u.a.createElement(pe,null,u.a.createElement(ie,null))});function Ee(){var e=Object(m.a)(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  padding: 5px;\n  align-items: center;\n  color: white;\n  justify-content: center;\n  background-color: #e3e3e3;\n  box-sizing: border-box;\n  -webkit-text-stroke: 2px orange;\n  font-size: 3em;\n  font-weight: bold;\n  text-transform: uppercase;\n"]);return Ee=function(){return e},e}var ve=g.default.div(Ee()),we=Object(l.b)(function(e){return{currentQuestionId:e.questions.currentQuestionId,gameFinished:e.game.gameFinished,gameInProgress:e.game.gameInProgress,gameLenght:e.game.gameLenght}},{})(function(e){return e.gameInProgress?u.a.createElement(ve,null,e.currentQuestionId+1,"/",e.gameLenght):!e.gameInProgress&&e.gameFinished?u.a.createElement(ve,null,"summary"):u.a.createElement(ve,null,"trivia")});function xe(){var e=Object(m.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: fit-content;\n  height: fit-content;\n  padding: 1.5%;\n  border: 3px dashed white;\n  font-size: 1.5em;\n  font-weight: bold;\n  border-radius: 10px;\n  background-color: orange;\n  color: white;\n  box-sizing: border-box;\n"]);return xe=function(){return e},e}function Oe(){var e=Object(m.a)(["\n  width: 100%;\n  height: fit-content;\n  font-size: 3em;\n  padding: 10%;\n  text-align: center;\n  background: transparent;\n  border: 3px dashed orange;\n  border-radius: 10px;\n  box-sizing: border-box;\n  color: ",";\n\n  ::placeholder,\n  ::-webkit-input-placeholder {\n    font-size: 0.9em;\n    color: ",";\n  }\n  :-ms-input-placeholder {\n    font-size: 0.9em;\n    color: ",";\n  }\n"]);return Oe=function(){return e},e}function qe(){var e=Object(m.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]);return qe=function(){return e},e}function je(){var e=Object(m.a)(["\n  display: grid;\n  width: 100%;\n  height: 100%;\n  place-items: center;\n  font-size: 2.5em;\n  font-weight: bold;\n  color: ",";\n  text-transform: uppercase;\n"]);return je=function(){return e},e}function Ae(){var e=Object(m.a)(["\n  grid-template-columns: 8fr 2fr;\n  height: 50%;\n  padding: 5px;\n  box-sizing: border-box;\n"]);return Ae=function(){return e},e}function Se(){var e=Object(m.a)(["\n  position: relative;\n  width: 80%;\n  display: grid;\n  place-items: center;\n"]);return Se=function(){return e},e}function Le(){var e=Object(m.a)(["\n  width: 100%;\n  display: grid;\n  justify-items: center;\n  align-content: center;\n"]);return Le=function(){return e},e}function Qe(){var e=Object(m.a)(["\n  display: grid;\n  width: 100%;\n  height: 100%;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;\n"]);return Qe=function(){return e},e}var Ge=g.default.div(Qe()),Ie=g.default.div(Le()),He=g.default.div(Se()),Ne=Object(g.default)(He)(Ae()),ke=g.default.div(je(),J.activeFont),Fe=g.default.div(qe()),Te=g.default.input(Oe(),function(e){return e.theme.activeFont},function(e){return e.theme.inactiveFont},function(e){return e.theme.inactiveFont}),Pe=g.default.div(xe()),ze=Object(l.b)(function(e){return{difficulty:e.game.difficulty,gameLenght:e.game.gameLenght,playerName:e.game.playerName,questionsType:e.game.questionsType,toBeatScore:e.game.highScore}},function(e){return{difficultyHandler:function(n){return function(){return e(Y.game.setGameDifficulty(n))}},gameLenghtHandler:function(n){return function(){return e(Y.game.setGameLenght(n))}},getQuestions:function(){return e(Y.question.getQuestsions())},questionTypesHandler:function(n){return function(){return e(Y.game.setQuestionsType(n))}},setPlayerName:function(n){return e(Y.game.setPlayerName(n))},startGame:function(){return e(Y.game.startGame())}}})(function(e){var n=e.difficulty,t=e.playerName,r=e.gameLenght,a=e.questionsType,i=e.toBeatScore;return u.a.createElement(Ge,null,u.a.createElement(Ie,null,u.a.createElement(He,null,u.a.createElement(Te,{theme:J,value:t,placeholder:"New player",type:"text",onChange:function(n){e.setPlayerName(n.currentTarget.value)}}),u.a.createElement(Pe,null,"To beat: ",i.toFixed(1),"%"))),u.a.createElement(Ie,null,u.a.createElement(Ne,null,u.a.createElement(ke,null,n),u.a.createElement(Fe,null,u.a.createElement(ee,{buttonHandler:e.difficultyHandler("Harder"),disabled:e.difficulty===h.HARD},"+"),u.a.createElement(ee,{buttonHandler:e.difficultyHandler("Easier"),disabled:e.difficulty===h.EASY},"-")))),u.a.createElement(Ie,null,u.a.createElement(Ne,null,u.a.createElement(ke,null,a),u.a.createElement(Fe,null,u.a.createElement(ee,{buttonHandler:e.questionTypesHandler("Complex"),disabled:e.questionsType===y.MULTI},"+"),u.a.createElement(ee,{buttonHandler:e.questionTypesHandler("Simple"),disabled:e.questionsType===y.SINGLE},"-")))),u.a.createElement(Ie,null,u.a.createElement(Ne,null,u.a.createElement(ke,null,r),u.a.createElement(Fe,null,u.a.createElement(ee,{buttonHandler:e.gameLenghtHandler("Longer"),disabled:e.gameLenght===E.LONG},"+"),u.a.createElement(ee,{buttonHandler:e.gameLenghtHandler("Shorter"),disabled:e.gameLenght===E.SHORT},"-")))),u.a.createElement(Ie,null,u.a.createElement(He,null,u.a.createElement(ee,{isActionButton:!0,buttonHandler:function(){e.getQuestions(),e.setPlayerName(e.playerName),e.startGame()},disabled:!e.playerName.length},"start"))))});function Re(){var e=Object(m.a)(["\n  font-weight: bold;\n  color: ",";\n  box-sizing: border-box;\n  margin-bottom: 10px;\n"]);return Re=function(){return e},e}function De(){var e=Object(m.a)(["\n  display: grid;\n  grid-template-rows: auto;\n  grid-row-gap: 10%;\n  font-size: 1em;\n  color: ",";\n"]);return De=function(){return e},e}function Me(){var e=Object(m.a)(["\n  display: grid;\n  justify-content: center;\n  place-items: center;\n  font-size: 10px;\n"]);return Me=function(){return e},e}function Ce(){var e=Object(m.a)(["\n  display: grid;\n  grid-template-rows: auto;\n  grid-row-gap: 2%;\n  overflow: auto;\n"]);return Ce=function(){return e},e}function Ue(){var e=Object(m.a)(["\n  display: grid;\n  width: 100%;\n  height: 100%;\n  grid-template-columns: 10% 90%;\n  text-align: center;\n  border-bottom: 2px dashed gray;\n\n  :last-child {\n    border-bottom: none;\n  }\n"]);return Ue=function(){return e},e}function _e(){var e=Object(m.a)(["\n  color: ",";\n  text-align: center;\n"]);return _e=function(){return e},e}function Be(){var e=Object(m.a)(["\n  color: ",";\n  text-align: center;\n  font-size: 30px;\n"]);return Be=function(){return e},e}function Ve(){var e=Object(m.a)(["\n  display: grid;\n  padding: 10px;\n  font-size: 2em;\n  font-weight: bold;\n  place-items: center;\n  border-top: 2px dashed gray;\n  box-sizing: border-box;\n"]);return Ve=function(){return e},e}function Ye(){var e=Object(m.a)(["\n  display: grid;\n  width: 100%;\n  padding: 5px;\n  grid-template-rows: 80% 10% 10%;\n  box-sizing: border-box;\n"]);return Ye=function(){return e},e}var Je=g.default.div(Ye()),Xe=g.default.div(Ve()),Ke=g.default.div(Be(),J.activeFont),We=g.default.span(_e(),J.activeFont),Ze=g.default.div(Ue()),$e=g.default.div(Ce()),en=g.default.div(Me()),nn=g.default.div(De(),J.activeFont),tn=g.default.div(Re(),J.activeFont),rn=Object(l.b)(function(e){return{questionsArray:e.questions.questionsArray,score:e.game.score}},function(e){return{setNewGame:function(){return e(Y.game.setNewGame())},setQuestionsArray:function(n){return e(Y.question.setQuestionsArray(n))}}})(function(e){var n=Object(x.a)({},e).questionsArray;return u.a.createElement(Je,null,u.a.createElement($e,null,n.map(function(e){return e.userAnswer===e.correctAnswer?u.a.createElement(Ze,{key:e.id},u.a.createElement(en,null,q.a.decode("&#9989;")),u.a.createElement(nn,null,q.a.decode(e.question),u.a.createElement(tn,null,q.a.decode(e.correctAnswer.toUpperCase())))):u.a.createElement(Ze,{key:e.id},u.a.createElement(en,null,q.a.decode("&#10060;")),u.a.createElement(nn,null,q.a.decode(e.question),u.a.createElement(tn,null,q.a.decode(e.correctAnswer.toUpperCase()))))})),u.a.createElement(Xe,null,u.a.createElement(Ke,null,u.a.createElement(We,null,"Your score was: "),(e.score/e.questionsArray.length*100).toFixed(1),"%")),u.a.createElement(ee,{isActionButton:!0,buttonHandler:function(){e.setQuestionsArray([]),e.setNewGame()}},"new game"))}),an=Object(l.b)(function(e){return{gameFinished:e.game.gameFinished,gameInProgress:e.game.gameInProgress,isLoading:e.questions.isLoading}},{})(function(e){return e.gameInProgress?u.a.createElement(w,null,u.a.createElement(v,null,u.a.createElement(we,null),u.a.createElement(ye,null))):!e.gameInProgress&&e.gameFinished?u.a.createElement(w,null,u.a.createElement(v,null,u.a.createElement(we,null),u.a.createElement(rn,null))):u.a.createElement(w,null,u.a.createElement(v,null,u.a.createElement(we,null),u.a.createElement(ze,null)))}),un=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"game/SetHighScore":return function(e,n){return Object(x.a)({},e,{highScore:n.highScore})}(e,n);case"@game/SetNewGame":return function(e){return Object(x.a)({},e,{gameFinished:!1,gameInProgress:!1,score:0})}(e);case"@game/StartGame":return function(e){return Object(x.a)({},e,{gameFinished:!1,gameInProgress:!0,score:0})}(e);case"@game/FinishGame":return function(e){return Object(x.a)({},e,{gameFinished:!0,gameInProgress:!1})}(e);case"@game/GameStartRequested":return function(e){return Object(x.a)({},e,{isLoading:!0})}(e);case"@game/GameStartCompleted":return function(e){return Object(x.a)({},e,{isLoading:!1})}(e);case"@game/SetLenght":return function(e,n){return Object(x.a)({},e,{gameLenght:n.gameLenght})}(e,n);case"@game/SetType":return function(e,n){return Object(x.a)({},e,{questionsType:n.questionsType})}(e,n);case"@game/SetDifficulty":return function(e,n){return Object(x.a)({},e,{difficulty:n.difficulty})}(e,n);case"@game/SetPlayerName":return function(e,n){return Object(x.a)({},e,{playerName:n.playerName})}(e,n);case"@game/AddPoint":return function(e){return Object(x.a)({},e,{score:e.score+1})}(e);default:return e}},on={currentQuestionId:0,isLoading:!1,questionsArray:[]},cn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:on,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"@question/AnswerQuestion":return function(e,n){return Object(x.a)({},e,{questionsArray:e.questionsArray.map(function(e,t){return t===n.questionId?Object(x.a)({},e,{userAnswer:n.answer}):e})})}(e,n);case"@question/GetQuestionsRequested":return function(e){return Object(x.a)({},e,{isLoading:!0})}(e);case"@question/GetQuestionsFailed":case"@question/GetQuestionsSuccess":return function(e){return Object(x.a)({},e,{isLoading:!1})}(e);case"@question/SetQuestionsArray":return function(e,n){return Object(x.a)({},e,{currentQuestionId:0,questionsArray:n.questionsArray})}(e,n);case"@question/ChangeCurrentQuestion":return function(e,n){return Object(x.a)({},e,{currentQuestionId:n.currentQuestionId})}(e,n);default:return e}},sn=Object(d.c)({game:un,questions:cn}),ln=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||d.d,dn=Object(d.e)(sn,ln(Object(d.a)(f.a))),fn=function(){return u.a.createElement(l.a,{store:dn},u.a.createElement(an,null))};t(67);c.a.render(u.a.createElement(i.Fragment,null,u.a.createElement(s.Normalize,null),u.a.createElement(fn,null)),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.3198bfa7.chunk.js.map