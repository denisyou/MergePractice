$(document).ready(function() {
    let vm = new Vue({
      el: "#test",
      data: {
        ques: "你現在對自己的2018年非常樂觀？",
        a1: ["是的",2],
        a2: ["不是",3],
        a3: ["不知道",4]

      }
    });

    function refreshQues(vm, questions, index) {
      vm.ques = questions[index]["question"];
      vm.a1 = questions[index]["answers"][0];
      vm.a2 = questions[index]["answers"][1];
      vm.a3 = questions[index]["answers"][2];
    }
    function removeBD() {
      //$(".qf").css("border", "none");
      $(".ans").css("border", "none");
      $(".a3").css("border", "none");
      $(".qf").css("width", "72%");
    }


    function showResult(res) {
      vm.ques = "測驗結果";
      vm.a1[0] = finalAnswers[res][0];
      vm.a2[0] = finalAnswers[res][1];
      vm.a3[0] = "";
    }

    $("#a1").on("click", function(){
      let next = vm.a1[1];
      if ( next <= questions.length ) {
        next = next - 1;
        refreshQues(vm, questions, next)
      } else {
        showResult(next);
        removeBD();
      }
    });

    $("#a2").on("click", function(){
      let next = vm.a2[1];
      if ( next <= questions.length ) {
        next = next - 1;
        refreshQues(vm, questions, next)
      } else {
        showResult(next);
        removeBD();
      }
    });

    $("#a3").on("click", function(){
      let next = vm.a3[1];
      if ( next <= questions.length ) {
        next = next - 1;
        refreshQues(vm, questions, next)
      } else {
        showResult(next);
        removeBD();
      }
    });

    

    });