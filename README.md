# Voxy-Language-School
Repositório criado para suportar a criação de um site para a empresa Voxy Language School a fim de cumprir o estagio obrigatório do IFTM Campus Patrocínio MG 


Relatório diário:


11/07/2026: Reuniâo com a empresa para definir as ideias principais do site e criação do repositório no github

index:
<footer> 
        <div class="bordasfoot"></div>

        <div class="colum">

        <div id="primeira">
        <a class="alink" href=""><h2>Voxy</h2></a> <br>
        <p>Aprender inglês pode ser leve.</p>
        </div>

        <div id="segunda">
            <p class="ng">N A V E G A R</p> 
            <a href="">Sobre</a>
            <a href="">Metodologia</a>
            <a href="">Turmas</a>
            <a href="">Investimento</a>
            <a href="">Pré-matrícula</a>
        </div>

        <div id="terceira">
            <p class="ng">C O N T A T O</p> <br>
            <a href="">@voxylanguageschool</a>
            <a href="">Agendar reunião de acolhimento</a>

        </div>
        </div>

        <div class="bordasfoot"></div>

        <div class="direitos">
            <div>
            <p>© 2026 Voxy Language School.</p>
            </div>

            <div>
                <p>Feito com cuidado, para quem quer ser ouvido.</p>
            </div>
        </div>
    </footer>
.

css:
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

footer{
    background-color: #fafafa;
}

.bordasfoot{
    height: 0.0625rem;
    background-color: #cacaca;
}

.colum{
    display: flex;
    flex-direction: row;
    gap: 17.5rem;
    padding: 4rem;
    margin: 1.5rem;
    margin-left: 1.25rem;
    grid-template-columns: repeat(3, 1fr); 
}

#primeira p{
    color: rgba(0, 0, 0, 0.6);
}

.alink{
    color: rgba(0, 0, 0, 0.8);
    text-decoration: none;
    font-size: 1.5rem;
}

#segunda{
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

#segunda a{
    text-decoration: none;
    color: rgba(0, 0, 0, 0.6);
}

#segunda a:hover{
    color: rgba(0, 0, 0, 0.3);
    transition: opacity ease-in 0.2s;

}

.segunda, .ng{
    font-size: o.75rem;
    color: rgba(0, 0, 0, 0.400)
}

#terceira{
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
}

#terceira a{
    text-decoration: underline;
    color: rgba(0, 0, 0, 0.6);
}

#terceira a:hover{
    color: rgba(0, 0, 0, 0.3);
    transition: opacity ease-in 0.2s;
}

.direitos{
    display: flex;
    flex-direction: row;
    gap: 41rem;
    padding: 2rem;
    margin-left: 4.25rem;
    color: rgba(0, 0, 0, 0.4);
}
    </footer>
        
