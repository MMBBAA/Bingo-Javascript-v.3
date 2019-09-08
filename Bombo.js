/*function generarArray(){*/
   var Bombo=[];
    for(var i=1;i<=99;i++){
        Bombo.push(i); 
    }

Bombo.sort(function() {return Math.random() - 0.5});

Bombo.current = 0;

Bombo.next = function(){
  return this.current===this.length-1
    ? null
    : this[++this.current];
}

function mostrar() {
  document.getElementById("MostrarNumeros").innerHTML = Bombo[Bombo.current];
}

window.onload = mostrar;

function next() {
  document.getElementById("MostrarNumeros").innerHTML = Bombo.next();
  var voz=document.getElementById("MostrarNumeros").innerHTML = Bombo.next();
  var bola = new Audio("sonidoNumero.wav"); 
        bola.play();
        reproduccionVoz(voz);
}

function reproduccionVoz(numero){

  switch (numero){
    case 1:
    var num1 =new Audio("1.mp3");
        num1.play();
    break;
    case 2:
    var num2 =new Audio("2.mp3");
        num2.play();
    break;
    case 3:
    var num3 =new Audio("3.mp3");
        num3.play();
    break;
    case 4:
    var num4 =new Audio("4.mp3");
        num4.play();
    break;
    case 5:
    var num5 =new Audio("5.mp3");
        num5.play();
    break;
    case 6:
    var num6 =new Audio("6.mp3");
        num6.play();
    break;
    case 7:
    var num7 =new Audio("7.mp3");
        num7.play();
    break;
    case 8:
    var num8 =new Audio("8.mp3");
        num8.play();
    break;
    case 9:
    var num9 =new Audio("9.mp3");
        num9.play();
    break;
    case 10:
    var num10 =new Audio("10.mp3");
        num10.play();
    break;
    case 11:
    var num11 =new Audio("11.mp3");
        num11.play();
    break;
    case 12:
    var num12 =new Audio("12.mp3");
        num12.play();
    break;
    case 13:
    var num13 =new Audio("13.mp3");
        num13.play();
    break;
    case 14:
    var num14 =new Audio("14.mp3");
        num14.play();
    break;
    case 15:
    var num15 =new Audio("15.mp3");
        num15.play();
    break;
    case 16:
    var num16 =new Audio("16.mp3");
        num16.play();
    break;
    case 17:
    var num17 =new Audio("17.mp3");
        num17.play();
    break;
    case 18:
    var num18 =new Audio("18.mp3");
        num18.play();
    break;
    case 19:
    var num19 =new Audio("19.mp3");
        num19.play();
    break;
    case 20:
    var num20 =new Audio("20.mp3");
        num20.play();
    break;
    case 21:
    var num21 =new Audio("21.mp3");
        num21.play();
    break;
    case 22:
    var num22 =new Audio("22.mp3");
        num22.play();
    break;
    case 23:
    var num23 =new Audio("23.mp3");
        num23.play();
    break;
    case 24:
    var num24 =new Audio("24.mp3");
        num24.play();
    break;
    case 25:
    var num25 =new Audio("25.mp3");
        num25.play();
    break;
    case 26:
    var nu26 =new Audio("26.mp3");
        nu26.play();
    break;
    case 27:
    var num27 =new Audio("27.mp3");
        num27.play();
    break;
    case 28:
    var num28 =new Audio("28.mp3");
        num28.play();
    break;
    case 29:
    var num29 =new Audio("29.mp3");
        num29.play();
    break;
    case 30:
    var num30 =new Audio("30.mp3");
        num30.play();
    break;
     case 31:
    var num31 =new Audio("31.mp3");
        num31.play();
    break;
    case 32:
    var num32 =new Audio("32.mp3");
        num32.play();
    break;
    case 33:
    var num33 =new Audio("33.mp3");
        num33.play();
    break;
    case 34:
    var num34 =new Audio("34.mp3");
        num34.play();
    break;
    case 35:
    var num35 =new Audio("35.mp3");
        num35.play();
    break;
    case 36:
    var nu36 =new Audio("36.mp3");
        nu36.play();
    break;
    case 37:
    var num37 =new Audio("37.mp3");
        num37.play();
    break;
    case 38:
    var num38 =new Audio("38.mp3");
        num38.play();
    break;
    case 39:
    var num39 =new Audio("39.mp3");
        num39.play();
    break;
    case 40:
    var num40 =new Audio("40.mp3");
        num40.play();
    break;
     case 41:
    var num41 =new Audio("41.mp3");
        num41.play();
    break;
    case 42:
    var num42 =new Audio("42.mp3");
        num42.play();
    break;
    case 43:
    var num43 =new Audio("43.mp3");
        num43.play();
    break;
    case 44:
    var num44 =new Audio("44.mp3");
        num44.play();
    break;
    case 45:
    var num45 =new Audio("45.mp3");
        num45.play();
    break;
    case 46:
    var nu46 =new Audio("46.mp3");
        nu46.play();
    break;
    case 47:
    var num47 =new Audio("47.mp3");
        num47.play();
    break;
    case 48:
    var num48 =new Audio("48.mp3");
        num48.play();
    break;
    case 49:
    var num49 =new Audio("49.mp3");
        num49.play();
    break;
    case 50:
    var num50 =new Audio("50.mp3");
        num50.play();
    break;
    case 51:
    var num51 =new Audio("51.mp3");
        num51.play();
    break;
    case 52:
    var num52 =new Audio("52.mp3");
        num52.play();
    break;
    case 53:
    var num53 =new Audio("53.mp3");
        num53.play();
    break;
    case 54:
    var num54 =new Audio("54.mp3");
        num54.play();
    break;
    case 55:
    var num55 =new Audio("55.mp3");
        num55.play();
    break;
    case 56:
    var nu56 =new Audio("56.mp3");
        nu56.play();
    break;
    case 57:
    var num57 =new Audio("57.mp3");
        num57.play();
    break;
    case 58:
    var num58 =new Audio("58.mp3");
        num58.play();
    break;
    case 59:
    var num59 =new Audio("59.mp3");
        num59.play();
    break;
    case 60:
    var num60 =new Audio("60.mp3");
        num60.play();
    break;
    case 61:
    var num61 =new Audio("61.mp3");
        num61.play();
    break;
    case 62:
    var num62 =new Audio("62.mp3");
        num62.play();
    break;
    case 63:
    var num63 =new Audio("63.mp3");
        num63.play();
    break;
    case 64:
    var num64 =new Audio("64.mp3");
        num64.play();
    break;
    case 65:
    var num65 =new Audio("65.mp3");
        num65.play();
    break;
    case 66:
    var nu66 =new Audio("66.mp3");
        nu66.play();
    break;
    case 67:
    var num67 =new Audio("67.mp3");
        num67.play();
    break;
    case 68:
    var num68 =new Audio("68.mp3");
        num68.play();
    break;
    case 69:
    var num69 =new Audio("69.mp3");
        num69.play();
    break;
    case 70:
    var num70 =new Audio("70.mp3");
        num70.play();
    break;
    case 71:
    var num71 =new Audio("71.mp3");
        num71.play();
    break;
    case 72:
    var num72 =new Audio("72.mp3");
        num72.play();
    break;
    case 73:
    var num73 =new Audio("73.mp3");
        num73.play();
    break;
    case 74:
    var num74 =new Audio("74.mp3");
        num74.play();
    break;
    case 75:
    var num75 =new Audio("75.mp3");
        num75.play();
    break;
    case 76:
    var nu76 =new Audio("76.mp3");
        nu76.play();
    break;
    case 77:
    var num77 =new Audio("77.mp3");
        num77.play();
    break;
    case 78:
    var num78 =new Audio("78.mp3");
        num78.play();
    break;
    case 79:
    var num79 =new Audio("79.mp3");
        num79.play();
    break;
    case 80:
    var num80 =new Audio("80.mp3");
        num80.play();
    break;
    case 81:
    var num81 =new Audio("81.mp3");
        num81.play();
    break;
    case 82:
    var num82 =new Audio("82.mp3");
        num82.play();
    break;
    case 83:
    var num83 =new Audio("83.mp3");
        num83.play();
    break;
    case 84:
    var num84 =new Audio("84.mp3");
        num84.play();
    break;
    case 85:
    var num85 =new Audio("85.mp3");
        num85.play();
    break;
    case 86:
    var nu86 =new Audio("86.mp3");
        nu86.play();
    break;
    case 87:
    var num87 =new Audio("87.mp3");
        num87.play();
    break;
    case 88:
    var num88 =new Audio("88.mp3");
        num88.play();
    break;
    case 89:
    var num89 =new Audio("89.mp3");
        num89.play();
    break;
    case 90:
    var num90 =new Audio("90.mp3");
        num90.play();
    break;
    case 91:
    var num91 =new Audio("91.mp3");
        num91.play();
    break;
    case 92:
    var num92 =new Audio("92.mp3");
        num92.play();
    break;
    case 93:
    var num93 =new Audio("93.mp3");
        num93.play();
    break;
    case 94:
    var num94 =new Audio("94.mp3");
        num94.play();
    break;
    case 95:
    var num95 =new Audio("95.mp3");
        num95.play();
    break;
    case 96:
    var nu96 =new Audio("96.mp3");
        nu96.play();
    break;
    case 97:
    var num97 =new Audio("97.mp3");
        num97.play();
    break;
    case 98:
    var num98 =new Audio("98.mp3");
        num98.play();
    break;
    case 99:
    var num99 =new Audio("99.mp3");
        num99.play();
    break;
      default :alert("se acabaron los números");
  }
}