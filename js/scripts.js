$(function() {

    var valores = {
        "quantidade": 10,
        "cor": "colorida",
        "gola": "gola_v",
        "qualidade": "q150",
        "estampa": "com_estampa",
        "embalagem": "bulk"
    },

    camisetas = {
        'branca': {
            'gola_v': {
                'sem_estampa': {
                    'preco_unit': 5.12,
                    'foto': 'v-white.jpg' 
                },
                'com_estampa': {
                    'preco_unit': 8.95,
                    'foto': 'v-white-personalized.jpg' 
                }
            },
            'gola_normal': {
                'sem_estampa': {
                    'preco_unit': 4.99,
                    'foto': 'normal-white.jpg' 
                },
                'com_estampa': {
                    'preco_unit': 8.77,
                    'foto': 'normal-white-personalized.jpg' 
                }
            }
        },
        'colorida': {
            'gola_v': {
                'sem_estampa': {
                    'preco_unit': 6.04,
                    'foto': 'v-color.jpg' 
                },
                'com_estampa': {
                    'preco_unit': 9.47,
                    'foto': 'v-color-personalized.png' 
                }
            },
            'gola_normal': {
                'sem_estampa': {
                    'preco_unit': 5.35,
                    'foto': 'normal-color.jpg' 
                },
                'com_estampa': {
                    'preco_unit': 9.28,
                    'foto': 'normal-color-personalized.jpg' 
                }
            }
        }
    };

    $(".option-filter div").click(function() {
        $(this).parent().children("div").removeClass("selected");
        $(this).addClass("selected");
        window.localStorage.setItem($(this).parent().attr("id"), $(this).attr("id"));
    atualizar()});

    $("select").change(function() {
        window.localStorage.setItem($(this).attr("id"), $(this).val());
        atualizar()});

    $("#quantidade").change(function() {
        window.localStorage.setItem("quantidade", $(this).val());
        atualizar()});

    function atualizar() {

            $(".refresh-loader").show();
        setTimeout(function() { $(".refresh-loader").hide();
                
            for (var props in valores) {
                if (localStorage[props]) {valores[props] = localStorage[props]}
            }                

            $("#quantidade").val(valores.quantidade);
            $("#cor").find("#" + valores.cor).addClass("selected");
            $("#gola").find("#" + valores.gola).addClass("selected");
            $("#qualidade").find("#" + valores.qualidade).addClass("selected");
            $("#estampa").val(valores.estampa);
            $("#embalagem").val(valores.embalagem);

            $("#result_gola").text($("#" + valores.gola).text());
            $("#result_estampa").text($("option[value='" + valores.estampa + "']").text());
            $("#result_qualidade").text($("#" + valores.qualidade).text());
            $("#result_cor").text($("#" + valores.cor).text());
            $("#result_embalagem").text($("option[value='" + valores.embalagem + "']").text());
            $("#result_quantidade").text(valores.quantidade);

            $("#foto-produto").attr("src", "./img/" + camisetas[valores.cor][valores.gola][valores.estampa].foto);
            var preco = (camisetas[valores.cor][valores.gola][valores.estampa].preco_unit) * (valores.quantidade);   
            if (valores.qualidade == "q190") {preco *= 1.12}
            if (valores.embalagem == "unitaria") {preco += (valores.quantidade * 0.15)}
            if (valores.quantidade >= "1000") {preco *= 0.85}
                else if (valores.quantidade >= "500") {preco *= 0.90}
                else if (valores.quantidade >= "100") {preco *= 0.95}
            $("#valor-total").text(preco.toLocaleString("pt-BR", {minimumFractionDigits: 2, maximumFractionDigits: 2}));
        }, 1000);
    };
atualizar()});

// $(function() {

//     var inputQuantidade = $("#quantidade"),
//         divBranca = $("#branca"),
//         divColorida = $("#colorida"),
//         divGolaV = $("#gola_v"),
//         divGolaNormal = $("#gola_normal"),
//         divNormal = $("#q150"),
//         divAlta = $("#q190"),
//         selectEstampa = $("#estampa"),
//         selectEmbalagem = $("#embalagem"),

//         valores = { // VARIÁVEL DE CÁLCULO
//             "quantidade": 10,
//             "cor": "colorida",
//             "gola": "gola_v",
//             "qualidade": "q150",
//             "estampa": "com_estampa",
//             "embalagem": "bulk"
//         },

//         camisetas = { //VARIÁVEL DE VALORES E FOTOS
//             'branca': {
//                 'gola_v': {
//                     'sem_estampa': {
//                         'preco_unit': 5.12,
//                         'foto': 'v-white.jpg' 
//                     },
//                     'com_estampa': {
//                         'preco_unit': 8.95,
//                         'foto': 'v-white-personalized.jpg' 
//                     }
//                 },
//                 'gola_normal': {
//                     'sem_estampa': {
//                         'preco_unit': 4.99,
//                         'foto': 'normal-white.jpg' 
//                     },
//                     'com_estampa': {
//                         'preco_unit': 8.77,
//                         'foto': 'normal-white-personalized.jpg' 
//                     }
//                 }
//             },
//             'colorida': {
//                 'gola_v': {
//                     'sem_estampa': {
//                         'preco_unit': 6.04,
//                         'foto': 'v-color.jpg' 
//                     },
//                     'com_estampa': {
//                         'preco_unit': 9.47,
//                         'foto': 'v-color-personalized.png' 
//                     }
//                 },
//                 'gola_normal': {
//                     'sem_estampa': {
//                         'preco_unit': 5.35,
//                         'foto': 'normal-color.jpg' 
//                     },
//                     'com_estampa': {
//                         'preco_unit': 9.28,
//                         'foto': 'normal-color-personalized.jpg' 
//                     }
//                 }
//             }
//         };

//         inputQuantidade.change(function() {
//             localStorage.setItem("Quantidade", $(this).val());
//         screenData()});

//         divBranca.click(function() {
//             localStorage.setItem("Cor", $(this).text());
//             $(".color-option").removeClass("selected");
//             $(this).addClass("selected");
//         screenData()});
//         divColorida.click(function() {
//             localStorage.setItem("Cor", $(this).text());
//             $(".color-option").removeClass("selected");
//             $(this).addClass("selected");
//         screenData()});

//         divGolaV.click(function() {
//             localStorage.setItem("Gola", $(this).text());
//             $(".gola-option").removeClass("selected");
//             $(this).addClass("selected");
//         screenData()});
//         divGolaNormal.click(function() {
//             localStorage.setItem("Gola", $(this).text());
//             $(".gola-option").removeClass("selected");
//             $(this).addClass("selected");
//         screenData()});

//         divNormal.click(function() {
//             localStorage.setItem("Qualidade", $(this).text());
//             $(".qualidade-option").removeClass("selected");
//             $(this).addClass("selected");
//         screenData()});
//         divAlta.click(function() {
//             localStorage.setItem("Qualidade", $(this).text());
//             $(".qualidade-option").removeClass("selected");
//             $(this).addClass("selected");
//         screenData()});

//         selectEstampa.change(function() {
//             localStorage.setItem("Estampa", $(this).find(":selected").text());
//         screenData()});

//         selectEmbalagem.change(function() {
//             localStorage.setItem("Embalagem", $(this).find(":selected").text());
//         screenData()});

//         function screenData() {

//                 $(".refresh-loader").show();
//             window.setTimeout(() => {
//                 $(".refresh-loader").hide();

//                 $("#result_quantidade").text("10");
//                 $("#result_cor").text("Colorida");
//                 $("#result_gola").text("Gola V");
//                 $("#result_qualidade").text("Normal (150g / m2)");
//                 $("#result_estampa").text("Com estampa");
//                 $("#result_embalagem").text("Bulk - Sem Plástico");

//                 if (localStorage.Quantidade) {
//                     $("#result_quantidade").text(localStorage.Quantidade);
//                     valores.quantidade = localStorage.Quantidade;
//                 }

//                 switch (localStorage.Cor) {
//                     case "Branca":
//                         $("#result_cor").text(localStorage.Cor);
//                         valores.cor = "branca"; 
//                         break;
//                     case "Colorida": 
//                         $("#result_cor").text(localStorage.Cor);
//                         valores.cor = "colorida"; 
//                         break;
//                 }

//                 switch (localStorage.Gola) {
//                     case "Gola V": 
//                         $("#result_gola").text(localStorage.Gola);
//                         valores.gola = "gola_v";
//                         break;
//                     case "Gola Normal":
//                         $("#result_gola").text(localStorage.Gola);
//                         valores.gola = "gola_normal";
//                         break;
//                 }

//                 switch (localStorage.Qualidade) {
//                     case "Normal (150g / m2)": 
//                         $("#result_qualidade").text(localStorage.Qualidade);
//                         valores.qualidade = "q150";
//                         break;
//                     case "Alta (190g / m2)":
//                         $("#result_qualidade").text(localStorage.Qualidade);
//                         valores.qualidade = "q190";
//                         break;
//                 }

//                 switch (localStorage.Estampa) {
//                     case "Com Estampa":
//                         $("#result_estampa").text(localStorage.Estampa);
//                         valores.estampa = "com_estampa";
//                         break;
//                     case "Sem Estampa":
//                         $("#result_estampa").text(localStorage.Estampa);
//                         valores.estampa = "sem_estampa";
//                         break;
//                 }

//                 switch (localStorage.Embalagem) {
//                     case "Bulk - Sem Plástico": 
//                         $("#result_embalagem").text(localStorage.Embalagem);
//                         valores.embalagem = "bulk";
//                         break;
//                     case "Unitária - Plástico": 
//                         $("#result_embalagem").text(localStorage.Embalagem);
//                         valores.embalagem = "unitaria";
//                         break;
//                 }

//                 $("#foto-produto").attr("src", `./img/${camisetas[valores.cor][valores.gola][valores.estampa].foto}`)

//                 var valorTotal = (camisetas[valores.cor][valores.gola][valores.estampa].preco_unit) * valores.quantidade;

//                 if (valores.qualidade == "q190") {
//                     valorTotal *= 1.12;
//                 }

//                 if (valores.embalagem == "unitaria") {
//                     valorTotal += (0.15 * valores.quantidade);
//                 }

//                 if (valores.quantidade >= 1000) {
//                     valorTotal *= 0.85;
//                 } else if (valores.quantidade >= 500) {
//                     valorTotal *= 0.90;
//                 } else if (valores.quantidade >= 100) {
//                     valorTotal *= 0.95;
//                 }

//                 $("#preco").text(`R$ ${valorTotal.toLocaleString("pt-BR", {minimumFractionDigits: 2, maximumFractionDigits: 2})}`);

//             }, 1000); // FIM DO SET-TIME-OUT
//         }

//         if (localStorage.Quantidade) {
//             $(inputQuantidade).val(localStorage.Quantidade);
//         }

//         $(".option-button").removeClass("selected");
//         switch (localStorage.Cor) {
//             case "Branca": $(divBranca).addClass("selected"); break;
//             case "Colorida": $(divColorida).addClass("selected"); break;
//             default: $(divColorida).addClass("selected"); break;
//         }
//         switch (localStorage.Gola) {
//             case "Gola V": $(divGolaV).addClass("selected"); break;
//             case "Gola Normal": $(divGolaNormal).addClass("selected"); break;
//             default: $(divGolaV).addClass("selected"); break;
//         }
//         switch (localStorage.Qualidade) {
//             case "Normal (150g / m2)": $(divNormal).addClass("selected"); break;
//             case "Alta (190g / m2)": $(divAlta).addClass("selected"); break;
//             default: $(divNormal).addClass("selected"); break;
//         }
//         switch (localStorage.Estampa) {
//             case "Com Estampa": $(selectEstampa).val("com_estampa"); break;
//             case "Sem Estampa": $(selectEstampa).val("sem_estampa"); break;
//         }
//         switch (localStorage.Embalagem) {
//             case "Bulk - Sem Plástico": $(selectEmbalagem).val("bulk"); break;
//             case "Unitária - Plástico": $(selectEmbalagem).val("unitaria"); break;
//         }
// screenData()});