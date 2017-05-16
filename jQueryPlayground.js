<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
#função css: muda o css de um elemento
    $("#target1").prop("disabled", true);
função prop: altera as propriedades de elementos html, não css. ex:desabilitar botões. 
    $("#target4").remove();
#função remove: remove um elemento
    $("#target2").appendTo("#right-well");
#função appendTo: move um elemento para o outro lado (no caso, right to left)
    $("#target5").clone().appendTo("#left-well");
#função clone:copia um elemento
$("#target1").parent().css("background-color", "red");
#função parent: modifica o "pai" do elemento (neste caso, left-well)
$("#right-well").children().css("color", "orange");
#função children: modifica os "filhos" do elemento pai (nesse caso, botoes right-well)
$("#left-well").children().css("color", "green");
#função children: modifica os "filhos" do elemento pai (nesse caso, botoes left-well)
$(".target:nth-child(2)").addClass("animated bounce");
#função ntn-child(x): modifica um elemento "filho" especifico (nesse caso, elemento 2 de ambos os lados, right and left)
$(".target:even").addClass("animated shake");
#função .target: adiciona classes e modifica todos os elementos escolhidos (nesse caso, todos os elementos target)
$("body").addClass("animated hinge");
#função body: alimenta todo o body.


  });
</script>

<!-- Only change code above this line. -->

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>

