            function enToutesLettres(nombre)
            {
                var resultat='', centaine, dizaine, unite;
                var 
tab=['cent','deux-cent','trois-cent','quatre-cent','cinq-cent','six-cent','sept-cent',
            'huit-cent','neuf-cent'];
                var 
tab2=['dix','vingt','trente','quarante','cinquante','soixante','soixante-dix','quatre-vingt',
            'quatre-vingt-dix'];
                var 
tab3=['zero','un','deux','trois','quatre','cinq','six','sept','huit','neuf','dix','onze','douze',
            'treize','quatorze','quinze','seize'];
                centaine = Math.trunc(nombre/100);
                dizaine = Math.trunc(nombre/10)%10;
                unite = nombre%10;
                dizu = dizaine*10+unite;
                if(centaine > 0) resultat+=tab[centaine-1];
                if((dizu >=17 && dizu <=70) || (dizu >=77 && dizu <=90) 
|| dizu >=97) 
                {
                    resultat+=' '+tab2[dizaine-1];
                    if(unite > 0) resultat += ' '+tab3[unite];
                }
                    
                if(unite > 0 && dizu <17) resultat += ' '+tab3[dizu];
                if(dizu > 70 && dizu <77) resultat += ' 
'+tab2[dizaine-2]+' '+tab3[dizu-60];
                if(dizu > 90 && dizu <97) resultat += ' 
'+tab2[dizaine-2]+' '+tab3[dizu-80];
                if(nombre == 0) resultat = 'zero';
                if(dizu == 10) resultat += ' dix';

                return resultat;
            }
            var number;
            do
            {
                do
                {
                    number = parseInt(prompt('Entrer un nombre 0-999'), 
10);
                }
                while(number<0 || number >= 1000);
            
                alert(enToutesLettres(number));
            }
            while(number != null);
