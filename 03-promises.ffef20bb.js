!function(){var e=document.querySelector(".form"),t=document.querySelector('input[name="delay"]'),n=document.querySelector('input[name="step"]'),o=document.querySelector('input[name="amount"]');document.querySelector('[type="submit"]');function u(e,t){return new Promise((function(n,o){var u=Math.random()>.3;setTimeout((function(){u?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}e.addEventListener("submit",(function(e){e.preventDefault();var c=o.value,r=n.value;c<=0|r<0|t.value<0&&window.alert("Please fill up the form correctly");for(var a=1;a<=c;a++){u(a,Number(t.value)+Number((a-1)*r)).then((function(e){var t=e.position,n=e.delay;console.log("✅ Fulfilled promise ".concat(t," in ").concat(n,"ms"))})).catch((function(e){var t=e.position,n=e.delay;console.log("❌ Rejected promise ".concat(t," in ").concat(n,"ms"))}))}}))}();
//# sourceMappingURL=03-promises.ffef20bb.js.map
