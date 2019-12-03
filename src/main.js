import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})


// this.stepsTitle = this.$el.querySelector(".steps_title");
//       this.positionStepsTitle = this.stepsTitle.getBoundingClientRect();
//             if(this.positionStepsTitle.top < window.innerHeight && this.positionStepsTitle.bottom >= 0) {
//                 console.log('ZAGOLOVOK');
// 	          }

//       this.stepsImageFirst = this.$el.querySelector(".steps_title");
//       this.positionStepsImageFirst = this.stepsImageFirst.getBoundingClientRect();
//             if(this.positionStepsImageFirst.top < window.innerHeight && this.positionStepsImageFirst.bottom >= 0) {
//                 console.log('PERVAJA KARTINKA 111111111111',this.stepsImageFirst.top);
// 	          }

//       this.stepsImageSecond = this.$el.querySelector(".steps_title");
//       this.positionStepsImageSecond = this.stepsImageSecond.getBoundingClientRect();
//             if(this.positionStepsImageSecond.top < window.innerHeight && this.positionStepsImageSecond.bottom >= 0) {
//                 console.log('VTORAJA KARTINKA 2222222222222');
// 	          }


//       this.stepsImageThird = this.$el.querySelector(".steps_title");
//       this.positionStepsImageThird = this.stepsImageThird.getBoundingClientRect();
//               if(this.positionStepsImageThird.top < window.innerHeight && this.positionStepsImageThird.bottom >= 0) {
//                       console.log('TRETAJA KARTINKA 33333333333');
// 	                }

//       this.stepsImageFourth = this.$el.querySelector(".steps_title");
//       this.positionStepsImageFourth = this.stepsImageFourth.getBoundingClientRect();
//               if(this.positionStepsImageFourth.top < window.innerHeight && this.positionStepsImageFourth.bottom >= 0) {
//                       console.log('CHETVIORTAJA KARTINKA 44444444444444');
// 	                }