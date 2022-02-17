import * as React from "react"
import { Helmet } from "react-helmet"
import ConceptSection from "../components/ConceptSection"
import '../styles/main.scss'
import * as svg from '../components/svgs.js'


const Red = (props) => <span className="red">{props.children}</span>
const Green = (props) => <span className="green">{props.children}</span>

const IndexPage = () => {

/*        <section className="explained">
          <p>Zgodnie z prawem unijnym połowa kwoty powinna iść na sprawiedliwą transformację.</p>
          <p>Według Business Insider aż 96% kwoty rozpłynęło się w budżecie.</p>
          <p>Polska desperacko potrzebuje sprawiedliwej transformacji.</p>
          <p>Jej brak oznacza podwyżki dla obywateli oraz zniszczenie przyszłości.</p>
          <p>Według raportu IPCC musimy zatrzymać globalne ocieplenie na poziomie 1,5st. C.</p>
        </section>
*/
  return (
    <main>
      <Helmet>
        <meta name="viewport" content="height=device-height, initial-scale=1.0" />
      </Helmet>
        <section className="start">
          <nav><h1 className="number-headline">25290000000</h1></nav>
          <p><Red>25 miliardów </Red>nie mieści się na ekranie.</p>
          <p>Właśnie tyle złotych zyskał polski budżet na handlu uprawnieniami do emisji CO2.</p>
          <p>Na co można by przeznaczyć tak astronomiczną kwotę?</p>
        </section>
        <ConceptSection
          headline={<>na powiększenie o <Green>połowę</Green> mocy turbin wiatrowych.</>}
          img={svg.wind}
          details={
            <>
              <p>Koszt instalacji 1 MW mocy w Europie oszacowano na 1,515 mln USD (2020) - na podstawie danych raportu <a href="https://www.irena.org/-/media/Files/IRENA/Agency/Publication/2021/Jun/IRENA_Power_Generation_Costs_2020.pdf">International Renewable Energy Agency (str. 57)</a></p>
              <p>Średni kurs dolara NBP w 2020 wynosił 3,8987 zł <a href="https://usd-pln.pl/2020/">Źródło</a></p>
              <p>Po przeliczeniu otrzymano 5,91 mln zł / MW </p>
              <p>Po podzieleniu wychodzi 4282 MW</p>
              <p>Zainstalowana moc elektrowni wiatrowych wynosi 8 212 MW. <a href="https://www.pse.pl/dokumenty?safeargs=666f6c64657249643d3333393139#">(Stan na 01.01.2022)</a></p>
            </>
          }
        >
          <h2>Dałoby to Polakom czysty i tanszy prąd.</h2>
        </ConceptSection>
        <ConceptSection
          headline={<>na <Green>5</Green> autobusów elektrycznych dla każdej gminy w Polsce.</>}
          img={svg.bus}
          details={
            <>
              <p>Założono cenę autobusu 2 mln złotych na podstawie danych z <a href="https://wspolnota.org.pl/news/autobus-elektryczny-w-kazdej-gminie-pytania-i-odpowiedzi">wspolnota.org.pl</a></p>
              <p>Za całą kwotę można kupić 12645 autobusów elektrycznych.</p>
              <p>W Polsce obecnie jest 2477 gmin. <a href="https://stat.gov.pl/statystyka-regionalna/jednostki-terytorialne/podzial-administracyjny-polski/">(Stan na 2022)</a></p>
              <p>Po podzieleniu wychodzi nam 5,10 autobusa na gminę.</p>
            </>
          }
        >
          <h2>Niskoemisyjny transport zbiorowy rozwiązuje szereg problemów.</h2>
          <h2>Począwszy od emisji i spalin, poprzez wykluczenie komunikacyjne, aż po korki.</h2>
        </ConceptSection>
        <ConceptSection
          headline={<>na termomodernizację <Green>każdej</Green> szkoły w Polsce.</>}
          img={svg.school}
          details={
            <>
              <p>Według <a href="https://stat.gov.pl/obszary-tematyczne/edukacja/edukacja/oswiata-i-wychowanie-w-roku-szkolnym-20202021,1,16.html">raportu GUS</a> z 2021 w Polsce znajduje się 14297 szkół podstawowych oraz 7577 szkół ponadpodstawowych</p>
              <p>Przyjęliśmy uproszczenie, że każda szkoła podstawowa i ponadpodstawowa to odrębny budynek.</p>
              <p>Po podzieleniu 21874 przez kwotę otrzymaliśmy 1,16 mln zł na szkołę.</p>
              <p>Koszt termomodernizacji różni się zdecydowanie w zależności od placówki</p>
            </>
          }
        >
          <h2>Znacząco ograniczyłoby to zużycie energii</h2>
        </ConceptSection>
        <section className="about-ets">
          <h1>Skąd wzięły się te sumy?</h1>
          <p>Kwota ponad 25 miliardów złotych wynika Europejskiego Systemu Handlu Emisjami (EU ETS). </p>
          <p>System ETS sprawia, że technologie szkodliwe dla klimatu stają się mniej opłacalne - za każdą tonę CO2 w objętym sektorze przewidziana jest opłata. </p> 
          <p>Jest to jedno z głównych narzędzi dzięki, któremu Unia Europejska ma ograniczyć swoje emisje o 55% do 2030 roku. </p> 
          <p>Pieniędzmi uzyskanymi ze sprzedaży uprawnień do emisji dysponują poszczególne państwa. Połowa środków powinna iść na cele środowiskowe.  </p>
          <p>Za miliardy z handlu emisjami powinniśmy przejść na tańsze, niskoemisyjne źródła energii. </p>
          <p>Według Business Insider aż 96% kwoty rozpłynęło się w budżecie. </p>
        </section>

        <section className="what-you-can">
          <h1>A co ty możesz zrobić dla klimatu?</h1>
          <p>odezwać się do polityków</p>
          <p>złościć się, płakać, śmiać się, panikować, mieć nadzieję, nie mieć nadziei - <b>czuć i współczuć</b></p>
          <p>porozmawiać ze swoimi najbliższymi</p>
          <p>dołączyć do proklimatycznych organizacji lub ruchów</p>
          <p>dołączyć do koła naukowego (np. PUT:eco)</p>
          <p>pogłębiać swoją wiedzę i się nią dzielić</p>
        </section>
        <section className="about">
          <h2>Kampania stworzona przez koło naukowe PUT:eco</h2>
          <div className="about__socials">
            <p><a href="https://put.eco">Strona internetowa</a></p>
            <p><a href="https://instagram.com/ecoputeco">Instagram</a></p>
            <p><a href="https://facebook.com/puteco">Facebook</a></p>
          </div>
        </section>
        <footer>
          <p>Kajetan Nowak, Michał Sikorski / PUT:eco</p>
          <p>2022</p>
        </footer>
    </main>
  )
}

export default IndexPage
