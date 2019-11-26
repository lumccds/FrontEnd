var DDD = prompt("Por favor, digite seu DDD: ");
var cid;


if (DDD == 11) {
    document.write("O seu DDD eh da cidade de São Paulo.</br>");
} else {
    if (DDD == 19)
        document.write("O seu DDD eh da cidade de Campinas.</br>");
    else {
       if (DDD == 21) {
            document.write("O seu DDD eh da cidade do Rio de Janeiro.</br>");
       } else {
           if (DDD == 27) {
                document.write("O seu DDD eh da cidade de Vitoria.</br>");
           } else {
               if (DDD == 31) {
                    document.write("O seu DDD eh da cidade de Belo Horizonte.</br>");
               } else {
                    document.write("DDD desconhecido.</br>");
               }
           }
       }
    }
}
