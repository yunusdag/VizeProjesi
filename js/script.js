var jumbotron = $(".jumbotron");
var egitimUrl = "egitim.json";
var personelUrl = "personel.json";
var secimKutusu = '<div class="col-lg-4"><div class="thumbnail"><a href="#" id="{{id}}"><img class="img-responsive" src="{{gorsel}}"></a><div class="caption text-center"><h3>{{baslik}}</h3></div></div></div>';
var profilKutusu2 = '<div class="col-md-6 col-sm-6 col-xs-12 col-lg-4"><div class="well well-sm"><div class="media"><a class="thumbnail pull-left" href="#"><img class="media-object" src="{{gorsel}}"></a><div class="media-body"><h4 class="media-heading pull-left">{{adsoyad}}</h4 pull-left><p>c</p></div></div></div></div>';
var profilKutusu = '<div class="col-md-6 col-sm-6 col-xs-12 col-lg-4"><div class="media"><div class="media-left media-middle"> <a href="#"> <img class="media-object" src="{{gorsel}}" alt="..."> </a> </div> <div class="media-body"> <h4 class="media-heading">{{adsoyad}}</h4>{{detay}}</div> </div></div>';


// baslik gorsel id
var insertProperty = function (string, propName, propValue) {
	var propToReplace = "{{" + propName + "}}";
	string = string.replace(new RegExp(propToReplace, "g"), propValue);
	return string;
}

var insertHtml = function (selector, html) {
	var targetElem = document.querySelector(selector);
	targetElem.innerHTML = html;
}

var ajax = function (json, data) {
	$.ajax({
		type: "GET",
		url: json,
		dataType: "json",
		success: data
	});
}

$("#personelMenu, #personelImage").click(function () {
	var ogretimUyeleriSecim = insertProperty(secimKutusu, "id", "ogretimUyeleriSecim");
	ogretimUyeleriSecim = insertProperty(ogretimUyeleriSecim, "gorsel", "images/ogretimuyesi.png");
	ogretimUyeleriSecim = insertProperty(ogretimUyeleriSecim, "baslik", "Öğretim Üyeleri");

	var akademikYardimciSecim = insertProperty(secimKutusu, "id", "akademikYardimciSecim");
	akademikYardimciSecim = insertProperty(akademikYardimciSecim, "gorsel", "images/akademik.png");
	akademikYardimciSecim = insertProperty(akademikYardimciSecim, "baslik", "Akademik Yardımcı");

	var idariTeknikSecim = insertProperty(secimKutusu, "id", "idariTeknikSecim");
	idariTeknikSecim = insertProperty(idariTeknikSecim, "gorsel", "images/idariteknik.png");
	idariTeknikSecim = insertProperty(idariTeknikSecim, "baslik", "İdari Teknik");

	insertHtml(".jumbotron", ogretimUyeleriSecim + akademikYardimciSecim + idariTeknikSecim);

	$("#ogretimUyeleriSecim").click(function () {

		ajax("personel.json", function (data) {
			var uyeler = data.OgretimUyeleri;

			var html = "";
			for (var i=0; i<uyeler.length; i++) {
				var yeniUye = insertProperty(profilKutusu, "gorsel", uyeler[i].Resim);
				yeniUye = insertProperty(yeniUye, "adsoyad", uyeler[i].AdSoyad);
				yeniUye = insertProperty(yeniUye, "detay", "<br>Mail<br> " + uyeler[i].Mail + "<br>Telefon: " + uyeler[i].Telefon);
				html += yeniUye;
			}
			insertHtml(".jumbotron", html);
		});
	});

	$("#akademikYardimciSecim").click(function () {

		ajax("personel.json", function (data) {
			var uyeler = data.AkademikYardımcı;

			var html = "";
			for(var i=0; i<uyeler.length; i++) {
				var yeniUye = insertProperty(profilKutusu, "gorsel", uyeler[i].Resim);
				yeniUye = insertProperty(yeniUye, "adsoyad", uyeler[i].AdSoyad);
				yeniUye = insertProperty(yeniUye, "detay", "<br>Mail<br> " + uyeler[i].Mail + "<br>Telefon: " + uyeler[i].Telefon);
				html += yeniUye;
			}
			insertHtml(".jumbotron", html);
		});

	});

	$("#idariTeknikSecim").click(function () {

		ajax("personel.json", function (data) {
			var uyeler = data.İdariTeknik;

			var html = "";
			for(var i=0; i<uyeler.length; i++) {
				var yeniUye = insertProperty(profilKutusu, "gorsel", uyeler[i].Resim);
				yeniUye = insertProperty(yeniUye, "adsoyad", uyeler[i].AdSoyad);
				yeniUye = insertProperty(yeniUye, "detay", "<br>Mail<br> " + uyeler[i].Mail + "<br>Telefon: " + uyeler[i].Telefon);
				html += yeniUye;
			}
			insertHtml(".jumbotron", html);
		});

	});
});




$("#egitimMenu, #egitimImage").click(function () {

	var lisansSecim = insertProperty(secimKutusu, "id", "lisansSecim");
	lisansSecim = insertProperty(lisansSecim, "gorsel", "images/lisans.png");
	lisansSecim = insertProperty(lisansSecim, "baslik", "Lisans");

	var yuksekLisansSecim = insertProperty(secimKutusu, "id", "yuksekLisansSecim");
	yuksekLisansSecim = insertProperty(yuksekLisansSecim, "gorsel", "images/yukseklisans.png");
	yuksekLisansSecim = insertProperty(yuksekLisansSecim, "baslik", "Yüksek Lisans");

	insertHtml(".jumbotron", lisansSecim + yuksekLisansSecim);

	$("#lisansSecim").click(function () {
		var guzDonemSecim = insertProperty(secimKutusu, "id", "guzDonemSecim");
		guzDonemSecim = insertProperty(guzDonemSecim, "gorsel", "images/güz.png");
		guzDonemSecim = insertProperty(guzDonemSecim, "baslik", "Güz");

		var baharDonemSecim = insertProperty(secimKutusu, "id", "baharDonemSecim");
		baharDonemSecim = insertProperty(baharDonemSecim, "gorsel", "images/bahar.png");
		baharDonemSecim = insertProperty(baharDonemSecim, "baslik", "Bahar");
	
		insertHtml(".jumbotron", guzDonemSecim + baharDonemSecim);

		$("#guzDonemSecim").click(function () {

			var sinifBirSecim = insertProperty(secimKutusu, "id", "sinifBirSecim");
			sinifBirSecim = insertProperty(sinifBirSecim, "gorsel", "images/1.sınıf.png");
			sinifBirSecim = insertProperty(sinifBirSecim, "baslik", "1. Sınıf");

			var sinifIkiSecim = insertProperty(secimKutusu, "id", "sinifIkiSecim");
			sinifIkiSecim = insertProperty(sinifIkiSecim, "gorsel", "images/2.sınıf.png");
			sinifIkiSecim = insertProperty(sinifIkiSecim, "baslik", "2. Sınıf");

			var sinifUcSecim = insertProperty(secimKutusu, "id", "sinifUcSecim");
			sinifUcSecim = insertProperty(sinifUcSecim, "gorsel", "images/3.sınıf.png");
			sinifUcSecim = insertProperty(sinifUcSecim, "baslik", "3. Sınıf");

			var sinifDortSecim = insertProperty(secimKutusu, "id", "sinifDortSecim");
			sinifDortSecim = insertProperty(sinifDortSecim, "gorsel", "images/4.sınıf.png");
			sinifDortSecim = insertProperty(sinifDortSecim, "baslik", "4. Sınıf");

			insertHtml(".jumbotron", sinifBirSecim + sinifIkiSecim + sinifUcSecim + sinifDortSecim);

			$("#sinifBirSecim").click(function () {
				ajax("egitim.json", function (data) {
					printTable(data.Lisans.Guz["1"]);
				});
			});

			$("#sinifIkiSecim").click(function () {
				ajax("egitim.json", function (data) {
					printTable(data.Lisans.Guz["2"]);
				});
			});

			$("#sinifUcSecim").click(function () {
				ajax("egitim.json", function (data) {
					printTable(data.Lisans.Guz["3"]);
				});
			});

			$("#sinifDortSecim").click(function () {
				ajax("egitim.json", function (data) {
					printTable(data.Lisans.Guz["4"]);
				});
			});

		});


		$("#baharDonemSecim").click(function () {

			var sinifBirSecim = insertProperty(secimKutusu, "id", "sinifBirSecim");
			sinifBirSecim = insertProperty(sinifBirSecim, "gorsel", "images/1.sınıf.png");
			sinifBirSecim = insertProperty(sinifBirSecim, "baslik", "1. Sınıf");

			var sinifIkiSecim = insertProperty(secimKutusu, "id", "sinifIkiSecim");
			sinifIkiSecim = insertProperty(sinifIkiSecim, "gorsel", "images/2.sınıf.png");
			sinifIkiSecim = insertProperty(sinifIkiSecim, "baslik", "2. Sınıf");

			var sinifUcSecim = insertProperty(secimKutusu, "id", "sinifUcSecim");
			sinifUcSecim = insertProperty(sinifUcSecim, "gorsel", "images/3.sınıf.png");
			sinifUcSecim = insertProperty(sinifUcSecim, "baslik", "3. Sınıf");

			var sinifDortSecim = insertProperty(secimKutusu, "id", "sinifDortSecim");
			sinifDortSecim = insertProperty(sinifDortSecim, "gorsel", "images/4.sınıf.png");
			sinifDortSecim = insertProperty(sinifDortSecim, "baslik", "4. Sınıf");

			insertHtml(".jumbotron", sinifBirSecim + sinifIkiSecim + sinifUcSecim + sinifDortSecim);

			$("#sinifBirSecim").click(function () {
				ajax("egitim.json", function (data) {
					printTable(data.Lisans.Bahar["1"]);
				});
			});

			$("#sinifIkiSecim").click(function () {
				ajax("egitim.json", function (data) {
					printTable(data.Lisans.Bahar["2"]);
				});
			});

			$("#sinifUcSecim").click(function () {
				ajax("egitim.json", function (data) {
					printTable(data.Lisans.Bahar["3"]);
				});
			});

			$("#sinifDortSecim").click(function () {
				ajax("egitim.json", function (data) {
					printTable(data.Lisans.Bahar["4"]);
				});
			});
		});

	});


	$("#yuksekLisansSecim").click(function () {
		var guzDonemSecim = insertProperty(secimKutusu, "id", "guzDonemSecim");
		guzDonemSecim = insertProperty(guzDonemSecim, "gorsel", "images/güz.png");
		guzDonemSecim = insertProperty(guzDonemSecim, "baslik", "Güz");

		var baharDonemSecim = insertProperty(secimKutusu, "id", "baharDonemSecim");
		baharDonemSecim = insertProperty(baharDonemSecim, "gorsel", "images/bahar.png");
		baharDonemSecim = insertProperty(baharDonemSecim, "baslik", "Bahar");

		insertHtml(".jumbotron", guzDonemSecim + baharDonemSecim);

		$("#guzDonemSecim").click(function () {
			ajax("egitim.json", function (data) {
				printTable(data.YuksekLisans.Guz);
			});
		});
		
		$("#baharDonemSecim").click(function () {
			ajax("egitim.json", function (data) {
				printTable(data.YuksekLisans.Bahar);
			});
		});

	});

});

var printTable = function (rows) {

	var tablo = '<div class="table-responsive"><table class="table table-bordered"><thead><tr><th>Saat</th> <th>Pazartesi</th> <th>Salı</th> <th>Çarşamba</th> <th>Perşembe</th> <th>Cuma</th> </tr> </thead> <tbody>';
	$.each(rows, function (i, row) {
		tablo += '<tr><th scope="row">' + i + '</th>'
		$.each(row, function (k, ders) {
			tablo += '<td>' + ders + '</td>';
		});
		tablo += '</tr>';
	});
	tablo += '</tbody> </table> </div>';

	insertHtml(".jumbotron", tablo);
};