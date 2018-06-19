import React from "react";
import { css } from "emotion";
import styled from "react-emotion";

import Text from "../components/Text";
import media from "../utils/media";

const Columns = styled.div`
  ${media.medium(css`
    display: flex;
    justify-content: space-between;

    & > * {
      width: calc(1 / 3 * 100%);
      margin-right: 4rem;

      &:last-child {
        margin-right: 0;
      }
    }
  `)};

  margin-top: 3rem;

  & > * {
    margin-bottom: 3rem;
  }
`;

const IndexPage = () => (
  <Text>
    <h2>Vipattaako tanssijalka?</h2>
    <p>
      Harmittaako, kun arcadet yksi toisensa jälkeen lopettavat toimintansa tai
      kadottavat laitteensa? Oletko kohdannut järkyttävät pettymykset niin
      Tennispalatsissa kuin Linnanmäelläkin etsiessäsi pelilaitteita? Vipattaako
      tanssijalka, mutta kotikutoiset pehmeät matot eivät enää riitä?
    </p>
    <p>
      Nyt tähän kaikkeen on ratkaisu! <strong>McKylän Superarcade</strong>{" "}
      tarjoaa tanssipelaajille (ja tanssipeleistä kiinnostuneille)
      mahdollisuuden pelailla vanhaa kunnon nelipaneelia (kuten{" "}
      <em>In The Groove</em>, <em>Dance Dance Revolution</em> tai{" "}
      <em>Stepmania</em>) tanssipeliaktiivien omistamilla kolikkopelikoneilla!
    </p>
    <h2>Laitteisto ja tilat</h2>
    <p>
      Tilassa on kolme (3) <strong>In the Groove -arcadelaitetta</strong>, joita
      kaikkia voidaan käyttää samanaikaisesti – joko pelaten samaa kappaletta
      yhtä aikaa käyttämällä <strong>SyncStart</strong>-ominaisuutta tai
      jokaisella koneella kunkin omia valintoja! Laitteiden välissä on myös
      hieman ääntä eristämässä itserakennetut <strong>ääniseinät</strong>, jotka
      kaunilla punaisella värillään luovat tunnelmaa.
    </p>
    <p>
      Näiden lisäksi tiloista löytyvät:
      <ul>
        <li>
          <strong>Keittiönurkkaus</strong>, jossa jääkaappi, mikroaaltouuni ja
          kahvinkeitin.
        </li>
        <li>
          <strong>WC- ja suihkutilat.</strong>
        </li>
      </ul>
    </p>
    <h2>Kuinka pääsen pelaamaan?</h2>
    <p>Pääset mukaan pelaamaan kolmella eri tavalla:</p>
    <Columns>
      <div>
        <h3>1. Oma pelivuoro</h3>
        <p>
          Laita viesti{" "}
          <a
            href="https://www.discord.gg/qyRFzyk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tanssipelaajien Discord-serverin
          </a>{" "}
          #arcadevuorot-kanavalla. Joku tilan vuokralaisista saattaa haluta
          peluuttaa sinua ja/tai ystäviäsi!
        </p>
      </div>

      <div>
        <h3>2. Tule avoimiin oviin</h3>
        <p>
          Saavu <strong>joka toisen viikon torstaina</strong> järjestettäviin
          avoimiin oviin! Löydät avoimien ovien päivämäärät{" "}
          <a
            href="https://calendar.google.com/calendar/embed?src=qmml1bksh5ikco2nlfth3eqqic%40group.calendar.google.com&ctz=Europe%2FHelsinki"
            target="_blank"
            rel="noopener noreferrer"
          >
            varauskalenteristamme
          </a>.
        </p>
      </div>

      <div>
        <h3>3. Liity vuokralaiseksi</h3>
        <p>
          Tule mukaan <strong>vuokralaiseksi</strong> – saat kulkutunnisteet ja
          voit käydä vapaasti pelaamassa arcadella, kunhan koneilla on vain
          tilaa!
        </p>
        <p>
          Lisätietoja vuokralaisuudesta saat{" "}
          <a
            href="https://www.discord.gg/qyRFzyk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tanssipelaajien Discord-serveriltä
          </a>.
        </p>
      </div>
    </Columns>
    <h2>Missä?</h2>
    <p>
      McKylän Superarcade sijaitsee <strong>Espoon Mäkkylässä</strong>, aivan
      Mäkkylän juna-aseman ja 550-linjan pysäkin vieressä.{" "}
      <a
        href="https://maps.google.com/?q=Turuntie%2020,%20Espoo,%20Finland"
        target="_blank"
        rel="noopener noreferrer"
      >
        Sijainti Google Mapsissa
      </a>.
    </p>
    <p>Tarkka osoitteemme on:</p>
    <p>
      <address>
        Leppävaaran Talliosake, talli 24<br />
        Turuntie 20<br />
        02650 Espoo
      </address>
    </p>
  </Text>
);

export default IndexPage;
