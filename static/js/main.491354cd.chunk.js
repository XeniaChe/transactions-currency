(this["webpackJsonptransactions-currency"]=this["webpackJsonptransactions-currency"]||[]).push([[0],[,function(t,e,a){t.exports={TransactionItem:"TransactionItem_TransactionItem__2kGwO",Title:"TransactionItem_Title__1iiE4",EuroValue:"TransactionItem_EuroValue__LayYU",PlnValue:"TransactionItem_PlnValue__37iLp",BtnClose:"TransactionItem_BtnClose__1UAr5"}},,function(t,e,a){t.exports={MaxTransactionItem:"MaxTransactionItem_MaxTransactionItem__37ssS",Title:"MaxTransactionItem_Title__atgyj",EuroValue:"MaxTransactionItem_EuroValue__2SnG4",PlnValue:"MaxTransactionItem_PlnValue__33pg7"}},,,,,,,function(t,e,a){t.exports={InputBox__values:"InputMainBox_InputBox__values__1etk8",BtnAdd:"InputMainBox_BtnAdd__3gJlP"}},function(t,e,a){t.exports={TransactionSummary:"TransactionSummary_TransactionSummary__ARPkr",not_active:"TransactionSummary_not_active__7kShf"}},function(t,e,a){t.exports={MaxTransView:"MaxTransactionView_MaxTransView__1qGHq"}},,,,function(t,e,a){t.exports={App:"App_App__2nmH9"}},function(t,e,a){t.exports={InputBox:"TransactionBuild_InputBox__c7_0K"}},function(t,e,a){t.exports={InputBox__current:"InputCurrent_InputBox__current__382WU"}},function(t,e,a){t.exports={single_value:"InputUserValue_single_value__1QaYy"}},function(t,e,a){t.exports={List__box:"TransactionsListView_List__box__1yzh1"}},function(t,e,a){t.exports={Summ:"TransactionSum_Summ__4PL3r"}},function(t,e,a){t.exports=a(29)},,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),l=a(15),c=a.n(l),s=(a(27),a(4)),o=a(5),u=a(8),i=a(7),m=(a(28),a(16)),d=a.n(m),p=a(13),_=a(9),v=a(17),h=a.n(v),f=a(10),x=a.n(f),E=r.a.createContext({currentRate:0,transactionName:"",transactionValue:0,transactions:[],total:0,maxTransaction:{}}),T=function(t){var e=Object(n.useContext)(E),a=!1;return(0===(e.currentRate||e.transactionValue)||e.transactionName.length<=0)&&(a=!a),r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:x.a.InputBox__values},r.a.createElement("h2",null,"Transaction details"),t.children),r.a.createElement("button",{className:x.a.BtnAdd,onClick:t.addTransaction,disabled:a}," ADD "))},N=a(18),V=a.n(N),I=function(t){return r.a.createElement("div",{className:V.a.InputBox__current},r.a.createElement("label",{htmlFor:"currentRate"},"Current Rate:"),r.a.createElement("p",null,"1 EURO = x zl"),r.a.createElement("input",{id:"currentRate",placeholder:"PLN",onChange:function(e){return t.input(e)},ref:t.ref,required:!0}))},g=a(19),b=a.n(g),y=function(t){return r.a.createElement("div",{className:b.a.single_value},r.a.createElement("label",{htmlFor:t.id},t.label),r.a.createElement("input",{id:t.id,placeholder:t.placeholder,onChange:function(e){return t.input(e)},required:!0}))},C=a(11),S=a.n(C),j=a(20),O=a.n(j),B=a(1),P=a.n(B),F=function(t){return r.a.createElement("div",{className:P.a.TransactionItem},r.a.createElement("p",{className:P.a.Title},t.transName),r.a.createElement("p",{className:P.a.EuroValue},t.transEuroValue," euro"),r.a.createElement("p",{className:P.a.PlnValue},t.transPlnValue," zl"),r.a.createElement("button",{className:P.a.BtnClose,onClick:function(e){return t.delete(e)}},"\xd7"))},R=function(t){var e,a,l=Object(n.useContext)(E);return void 0!==l.transactions&&(a=l.transactions),e=a.map((function(e,a){return r.a.createElement(F,{transName:e.name,transEuroValue:e.valueEuro,transPlnValue:e.valuePln,key:a,delete:function(e){return t.delete(e,a)}})})),r.a.createElement(n.Fragment,null,e)},k=a(21),w=a.n(k),M=function(t){var e=Object(n.useContext)(E);return r.a.createElement(n.Fragment,null,0!==e.total?r.a.createElement("div",{className:w.a.Summ},r.a.createElement("h3",null,"Total:"),r.a.createElement("p",null," ",e.total," zl ")):null)},A=function(t){return r.a.createElement("div",{className:O.a.List__box},r.a.createElement("h3",null,"Added transactions list:"),r.a.createElement(R,{delete:t.delete}),r.a.createElement(M,null))},H=a(12),L=a.n(H),U=a(3),z=a.n(U),q=function(t){var e=Object(n.useContext)(E);return r.a.createElement("div",{className:z.a.MaxTransactionItem},r.a.createElement("p",{className:z.a.Title},e.maxTransaction.name),r.a.createElement("p",{className:z.a.EuroValue},e.maxTransaction.valueEuro," euro"),r.a.createElement("p",{className:z.a.PlnValue},e.maxTransaction.valuePln," zl"))},G=function(t){var e=Object(n.useContext)(E),a=Object.keys(e.maxTransaction).length,l=[L.a.MaxTransView];return 0===e.transactions.length&&l.push(L.a.not_active),r.a.createElement("div",{className:l.join(" ")},r.a.createElement("h3",null,"Your maximum transaction:"),a>0?r.a.createElement(q,null):null)},J=function(t){var e=Object(n.useContext)(E),a=[S.a.TransactionSummary];return 0===e.transactions.length&&a.push(S.a.not_active),r.a.createElement("div",{className:a.join(" ")},r.a.createElement(A,{delete:t.delete}),r.a.createElement(G,null))},W=function(t){Object(u.a)(a,t);var e=Object(i.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=e.call.apply(e,[this].concat(r))).state={currentRate:0,transactionName:"",transactionValue:0,transactions:[],total:0,maxTransaction:{}},t.inputCurrentHandler=function(e){var a=e.target.value,n=parseFloat(parseFloat(a).toFixed(2));t.setState({currentRate:n}),t.currentChengeRecalculation(n)},t.inputNameHandler=function(e){var a=e.target.value;t.setState({transactionName:a})},t.inputValueHandler=function(e){var a=e.target.value,n=parseFloat(parseFloat(a).toFixed(2));t.setState({transactionValue:n})},t.totalSumCalculation=function(e){var a,n=0,r=Object(_.a)(e);try{for(r.s();!(a=r.n()).done;){n+=a.value.valuePln}}catch(c){r.e(c)}finally{r.f()}var l=parseFloat(n.toFixed(2));t.setState({total:l})},t.maxValueCalculation=function(e){var a=[];if(e.length>0){var n,r=Object(_.a)(e);try{for(r.s();!(n=r.n()).done;){var l=n.value;a.push(l.valuePln)}}catch(u){r.e(u)}finally{r.f()}var c=a.reduce((function(t,e){return Math.max(t,e)})),s=a.findIndex((function(t){return t===c})),o=e.find((function(t,e){return e===s}));t.setState({maxTransaction:o})}else 0===e.length&&t.setState({maxTransaction:{}})},t.addTransactionHandler=function(){if(0!==t.state.currentRate&&0!==t.state.transactionValue&&t.state.transactionName.length>0&&!isNaN(t.state.currentRate)&&!isNaN(t.state.transactionValue)){var e=parseFloat((t.state.currentRate*t.state.transactionValue).toFixed(2)),a={name:t.state.transactionName,valueEuro:t.state.transactionValue,valuePln:e},n=Object(p.a)(t.state.transactions);n.push(a),t.setState({transactions:n,transactionName:"",transactionValue:0}),document.getElementById("userInputName").value=null,document.getElementById("userInpuValue").value=null,t.totalSumCalculation(n),t.maxValueCalculation(n)}else isNaN(t.state.currentRate)||isNaN(t.state.transactionValue)?alert("Please, enter valid values"):alert("Please, fill in all the values")},t.deleteTransactionItemHandler=function(e,a){var n=a,r=Object(p.a)(t.state.transactions);r.splice(n,1),t.setState({transactions:r}),t.totalSumCalculation(r),t.maxValueCalculation(r)},t}return Object(o.a)(a,[{key:"currentChengeRecalculation",value:function(t){if(this.state.currentRate!==t&&this.state.transactions.length>0){var e,a=0,n=Object(_.a)(this.state.transactions);try{for(n.s();!(e=n.n()).done;){var r=e.value;r.valuePln=parseFloat((t*r.valueEuro).toFixed(2)),a+=r.valuePln}}catch(c){n.e(c)}finally{n.f()}var l=parseFloat(a.toFixed(2));this.setState({total:l})}}},{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(E.Provider,{value:{currentRate:this.state.currentRate,transactionName:this.state.transactionName,transactionValue:this.state.transactionValue,transactions:this.state.transactions,total:this.state.total,maxTransaction:this.state.maxTransaction}},r.a.createElement("div",{className:h.a.InputBox},r.a.createElement(I,{input:this.inputCurrentHandler,checking:this.state.currentRate}),r.a.createElement(T,{addTransaction:this.addTransactionHandler},r.a.createElement(y,{input:this.inputNameHandler,checking:this.state.transactionName,id:"userInputName",label:"Transaction's title:",placeholder:"title"}),r.a.createElement(y,{input:this.inputValueHandler,checking:this.state.transactionValue,id:"userInpuValue",placeholder:"EURO",label:"Transaction's value:"}))),r.a.createElement(J,{delete:this.deleteTransactionItemHandler})))}}]),a}(n.Component),Y=function(t){Object(u.a)(a,t);var e=Object(i.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:d.a.App},r.a.createElement(W,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[22,1,2]]]);
//# sourceMappingURL=main.491354cd.chunk.js.map