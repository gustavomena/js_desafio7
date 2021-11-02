(function ($) {
  $(".classForm").on("submit", function (e) {
    e.preventDefault();
    const superHeroID = parseInt($(".searchClass").val());
    //const superHeroID = parseInt($(".realSearch").val());

    // if (isNaN(superHeroID)) {
    //   return alert("Ingresa un número ctm!");
    //   // return APICall(`search/${input_value}`);
    // }
    if (superHeroID < 1 || superHeroID > 731) {
      return alert("Solo puedes ingresar numeros entre 1 y 731.");
    }
    APICall(superHeroID);
  });
})(jQuery);

(function () {
  $(".searchClass").on("keyup", function (e) {
    console.log(e.target.value);
  });
})();

const apiUrl = "https://superheroapi.com/api.php/106629905149807/";

function successApiCall(hero) {
  hero = hero.hasOwnProperty("results") ? hero.results[0] : hero;
  setCard(".superHeroCard", htmlConstructor(hero));
  setHero("#chartContainer", getChartOptions(hero));
}

function setCard(selector, htmlCode) {
  $(selector).html(htmlCode);
}
function setHero(selector, chartCode) {
  $(selector).CanvasJSChart(chartCode);
}

function failedApiCall(error) {
  console.log(error);
}

function APICall(id) {
  console.log(apiUrl + id);
  $.ajax({
    type: "GET",
    dataType: "json",
    url: apiUrl + id,
    success: function (hero){
      successApiCall(hero);
    },
    error: function (error){
      failedApiCall(error);
    },
  });
}

function getChartOptions(hero) {
  const options = {
    title: {
      text: `Estadísticas de Poder para ${hero.name}`,
    },
    data: [
      {
        type: "pie",
        startAngle: 45,
        showInLegend: "true",
        legendText: "{label}",
        indexLabel: "{label} ({y})",
        yValueFormatString: "#,##0.#" % "",
        dataPoints: setPowerStats(hero),
      },
    ],
  };

  return options;
}

function setPowerStats(hero) {
  return Object.keys(hero.powerstats).map((power) => ({
    label: power,
    y: parseInt(hero.powerstats[power]),
  }));
}
