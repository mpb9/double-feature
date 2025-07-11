import ArticleHeader from "../../../components/articles/article-header";
import ArticleInfo from "../../../components/articles/article-info";
import { IMG_ROUTES } from "../../../constants";
import { getArticleSpecsById } from "../../../services/article-specs-service";
import { sleep } from "../../../services/loader-service";

export async function loader() {
  await sleep(300);
  const data = getArticleSpecsById("25-for-25");
  return data;
}

export default function TwentyFiveForTwentyFive({ loaderData }) {
  const articleSpecs = loaderData;

  return (
    <>
      <ArticleHeader articleSpecs={articleSpecs} />
      <main>
        <ArticleInfo articleSpecs={articleSpecs} htmlMappers={[]} />
        <h2>The 25 Best Films of the 21st Century (so far)</h2>
        <ul>
          <li>
            only caveat: <b>one film per director</b>
          </li>
          <li>
            shoutout{" "}
            <a
              href="https://open.spotify.com/show/6mTel3azvnK8isLs4VujvF?si=4acf0f9ee3aa48f5"
              rel="nofollow"
            >
              The Big Picture
            </a>{" "}
            podcast for the inspiration!
          </li>
        </ul>
        <h2>
          25. <a href="https://boxd.it/dGNE">Lady Bird</a>
        </h2>
        <h2>
          24. <a href="https://boxd.it/2416">Hot Fuzz</a>
        </h2>
        <h2>
          23. <a href="https://boxd.it/20hO">Superbad</a>
        </h2>
        <h2>
          22. <a href="https://boxd.it/eOCm">Get Out</a>
        </h2>
        <h2>
          21. <a href="https://boxd.it/948A">The Handmaiden</a>
        </h2>
        <h2>
          20. <a href="https://boxd.it/d2hI">The Favourite</a>
        </h2>
        <h2>
          19. <a href="https://boxd.it/hNVe">Hereditary</a>
        </h2>
        <h2>
          18.{" "}
          <a href="https://boxd.it/jUk4">Everything Everywhere All at Once</a>
        </h2>
        <p>
          if there's a common theme on this list, its that im a sucker for
          sincere cinema.
        </p>
        <h2>
          17. <a href="https://boxd.it/1JP0">All About Lily Chou-Chou</a>
        </h2>
        <p>
          When I put this movie on for the first time a few months ago, I
          couldn't even get through the{" "}
          <a href="https://youtu.be/oKGoEvvZXzI?si=xwDF9D2PnWiFALWZ">
            opening sequence
          </a>{" "}
          without spamming my friends with texts professing my love for it. I'm
          just going to let a few of my initial messages speak for themselves:
        </p>
        <div className="img">
          <img
            src={`${IMG_ROUTES.articles}${articleSpecs.id}/all-about-lily-chou-chou-text1.png`}
            alt="Text 1 - All About Lily Chou-Chou (2001)"
          />
        </div>
        <div className="img">
          <img
            src={`${IMG_ROUTES.articles}${articleSpecs.id}/all-about-lily-chou-chou-text2.png`}
            alt="Text 2 - All About Lily Chou-Chou (2001)"
          />
        </div>
        <p>
          <i>
            yes, it was incredibly late at night, and yes, I was out on the town
            prior to watching, and yes, I may have been under the influence of a
            few substances... BUT THAT WAS FAR FROM THE FIRST TIME I FOUND
            MYSELF WATCHING A MOVIE IN THAT STATE AND LEMME TELL YA:
          </i>
        </p>
        <p>
          this movie fucks every which way no matter what state of mind you're
          in <i>(and yes, I've rewatched it since and it still fucks).</i>
        </p>
        <p>P.S.</p>
        <p>
          <i>All About Lily Chou-Chou</i> is a deeply fucked up movie and is an
          incredibly difficult watch for the vast majority of the film{" "}
          <i>(despite how i've been making it sound)</i>…{" "}
          <b>
            genuine trigger warnings for sexual assault, bullying, and suicide
          </b>
          . That being said, its one of the most beautifully shot films I've
          ever seen. The themes of alienation, escapism, peer-pressure, social
          media, youth, and fandom are explored in such a raw, unflinching
          manner. There's such a universality to the film's depictions of the
          horrors of adolescence, yet its simultaneously hyper-specific in its
          physical and temporal setting (Japan in the late 90s/early 2000s).
          This movie feels <b>so</b> lived in and only through such specificity
          of place and time can it ellicit such an emotional response from a
          global audience.
        </p>
        <p>
          I've been thinking a lot about how complicated and impractical it is
          to find a community in our current society. Its been on my mind for a
          variety of reasons, less-so that I've been feeling especially lonely
          and more-so that I've just been consuming a lot of media that touches
          on the subject. While alienation <i>(also see: escapism)</i> is a
          common theme of many films on this list,
          <i>All About Lily Chou-Chou</i> is the film that keeps coming to mind
          when I try to think through the social and economic factors that
          contribute to the loneliness epidemic that's plagued the youth for
          decades. Sigh, anyways, I'm done rambling, but I just want to add that
          this movie also has such an{" "}
          <a href="https://letterboxd.com/michaelbeebe/list/soundtracks/detail/">
            incredible soundtrack
          </a>
          , so have fun checking that out if you trust my music taste.
        </p>
        <h2>
          16. <a href="https://boxd.it/1Y2i">Children of Men</a>
        </h2>
        <div id="img">
          <img
            src={`${IMG_ROUTES.articles}${articleSpecs.id}/children-of-men.jpeg`}
            alt="'Clive Owen's character, Theo, visits a friend at Battersea Power Station, which is now some combination of government building and private collection. Cultural treasures - Michelangelo's David, Picasso's Guernica, Pink Floyd's inflatable pig - are preserved in a building that is itself a refurbished heritage artifact.' - Mark Fisher"
          />
        </div>
        <p>
          lol if The Brutalist was "up my alley", this movie features{" "}
          <a href="https://youtu.be/wrALRx95mHs?si=5nY18gnUy8ByZVA0">
            this scene
          </a>
          . its unbearable how relevant this film is specifically in regard to
          america's despicable treatment of immigrants (illegal, legal, whatever
          it shouldn't matter they're ppl like holy shit have some empathy). the
          filmmaking in this is maybe the best of the century? the way it
          demonstrates the infighting that seems to always pop up between
          leftist factions in the face of oppression is dope + Cuaron empathizes
          with the correct side + we need to work together to fight the real
          enemy.
        </p>
        <ul>
          <li>
            <a href="https://www.goodreads.com/quotes/11243889-in-one-of-the-key-scenes-in-alfonso-cuaron-s-2006">
              quote from Mark Fisher's <i>Capitalist Realism</i>
            </a>{" "}
            regarding Children of Men
          </li>
        </ul>
        <h2>
          15. <a href="https://boxd.it/k4BO">The Brutalist</a>
        </h2>
        <blockquote>
          My buildings were designed to endure such erosion.
        </blockquote>
        <p>
          a self-indulgent, uncompromised 3 hour epic about the lie at the core
          of the american dream, how capitalism shackles artists, escapism thru
          drugs (and fucking zionism), the inability of the bourgeois class to
          engage with art… idk its just all very up my alley. oh and it took
          fucking risks!
        </p>
        <ul>
          <li>
            very thought-provoking{" "}
            <a href="https://open.spotify.com/episode/2fUO43K5JsFtCT1bWbcoFp?si=ug-ZU6NMQ028i6zAxUXL_w">
              The Big Picture podcast episode featuring Adam Nayman
            </a>
          </li>
        </ul>
        <h2>
          14. <a href="https://boxd.it/2b1M">Crouching Tiger, Hidden Dragon</a>
        </h2>
        <div id="img">
          <img
            src={`${IMG_ROUTES.articles}${articleSpecs.id}/crouching-tiger-hidden-dragon.jpg`}
            alt="Zhang Ziyi and Michelle Yeoh in Crouching Tiger, Hidden Dragon (2000)"
          />
        </div>
        <p>
          this movie blew away my expectations… what i was anticipating would've
          been dope too but i mean cmon now. no one expects something of this
          magnitude going into a first-time viewing of any film. i was aware of
          the prestige and universal acclaim, but this is truly an epic in every
          sense of the word.
        </p>
        <p>
          to briefly touch on the fight scenes, they fucking float lol. the
          moment in the{" "}
          <a href="https://youtu.be/ltY3ZLA6dA8?si=1ndg1AeQyZkaYibg">
            initial showdown
          </a>{" "}
          between Zhang Ziyi and Michelle Yeoh where they both just take off
          into the air holy shit its an "omg i love the movies" moment. it
          instantly communicates the enchanting/romantic nature of these mythic
          martial artists and their mastery over the craft. and it looks cool as
          fuckkk
        </p>
        <p>
          so the leads of this movie (Ziyi, Yeoh, and Chow Yun-Fat) play maybe
          the three coolest people to ever exist? all of them deliver phenomenal
          performances, but its impossible not to key in on Zhang Ziyi. as a 20
          year old, she's trusted with large chunks of a film that also features
          two of asia's most renown/beloved actors. needless to say, Ziyi was
          more than up to the task (lol her character is also just so cool this
          movie is so cool)
        </p>
        <p>
          there's a lot that contributes to the magic of this movie (too much to
          try and list rn), but my fav theme is the suppression of desire
          between Yeoh and Yun-Fat's characters. i'm not going to spoil, but if
          you've seen it you know the vibe. what a banger
        </p>
        <h2>
          13. <a href="https://boxd.it/7bQA">Whiplash</a>
        </h2>
        <p>
          <i>
            ur so pressed abt whether ur rushing or dragging, but when was the
            last time u asked urself why the fuck you give such a shit? do you
            even remember the moment that you stopped loving the thing u spend
            every waking moment trying to perfect? are you aware that ur never
            going to be able to? are you scared? do you need ur abusive teacher
            just as much as he needs you? do u feel more at ease when ur with
            someone who pushes you further than ur capable of being pushed? how
            have you fallen so deeply into obsession? or, why are you so scared
            of no longer being able to indulge urself in this obsession that ur
            making a father-figure out of a man whos life was broken by it?
            there is no perfecting it, you're now only capable of seeking
            satisfaction through the same cycle of trauma that's broken the
            fools that went down this path before you. cmon, miles. let's just
            go to the movies or something..
          </i>
        </p>
        <p>
          oooo i love this movie. its in the pantheon of the{" "}
          <i>movie-about-how-self-destructive-it-is-to-make-movies</i> subgenre…
          and, since its Damien Chazelle, obviously the metaphor for filmmaking
          is jazz music (p.s.{" "}
          <a href="https://letterboxd.com/director/damien-chazelle/">
            all of Chazelle's movies
          </a>{" "}
          fit in this subgenre). the ending is maybe(?) misinterpreted by some
          ppl, but omg is it devastating…
        </p>
        <h2>
          12. <a href="https://boxd.it/1JzG">Inglourious Basterds</a>
        </h2>
        <p>
          was my fav movie throughout high school and i'm very due to watch it
          again. my fav Tarantino + fuck nazis… its undeniable how entrenched
          some of these scenes/set-pieces are in the minds of everyone who
          watched them. that feat alone is incredibly special, but this movie's
          sum is still greater than its parts… just kind of like a masterclass i
          suppose lol also: excuse my language, but Quentin stop being a little
          self-righteous bitch and just make another movie y r u more worried
          abt ur legacy than just making a movie abt whatever ur into at the
          time? u made a dumb rule for yourself and ur the only one who cares
          anddd well yeah i just like want u to get over yourself bc u make
          great movies. not to mention ur wrong to universally criticize the
          later career works of directors: not only have ppl like Miyazaki and
          Scorsese both made ur theory look stupid as hell in the past couple of
          years, and those r just examples off the dome. do whatever u want, i
          guess, i dont have any right to demand something from an artist, but
          damn dude i do not understand ur mindset rn
        </p>
        <h2>
          11. <a href="https://boxd.it/pUfA">Dune: Part 2</a>
        </h2>
        <p>
          i dont think ive ever written anything significant abt <i>Dune</i>,
          which is an unusual thing for me to (not) do when i love something to
          the extent that i love <i>Dune</i>. the movies both fuck (and so will{" "}
          <i>Messiah</i>, fuck the doubters + trust in Villeneuve's vision), and
          the books are among my all-time favorites (mandatorily acknowledging
          that i dont read much ngl). this might be another example of the
          "Parasite Effect", a term that i just made up. it occurs when i'm just
          so passionate abt the themes explored and fully aligned with the
          critiques levelled in films (those akin to <i>Parasite</i>/<i>Dune</i>
          ), and its hard for me to refrain from just saying "hell yeah" or
          simply listing all the things i love abt them. someday i'll get around
          to writing more thoughtfully abt <i>Dune</i>, but today is, yet again,
          not that day.
        </p>
        <p>anyways, here r my fav books (fiction) (unordered):</p>
        <ul>
          <i>
            <li>
              <i>Frankenstein; or, The Modern Prometheus</i>
            </li>
            <li>
              <i>The Dispossessed</i>
            </li>
            <li>
              <i>Things Fall Apart</i>
            </li>
            <li>
              <i>Dune</i>
            </li>
          </i>
        </ul>
        <p>
          <i>(i like sci-fi)</i>
        </p>
        <h2>
          10. <a href="https://boxd.it/Arw0">Aftersun</a>
        </h2>
        <div id="img">
          <img
            src={`${IMG_ROUTES.articles}${articleSpecs.id}/aftersun.jpg`}
            alt="Frankie Corio and Paul Mescal in Aftersun (2022)"
          />
        </div>
        <p>
          ok this is the highest ranked movie that ive only watched once. and i
          watched it on an airplane. if you've seen it, then you can prob
          picture me hiding in my hoodie letting tears run down my face while
          the flight attendant asked if i wanted any water or biscoff cookies. i
          did cannot do justice to how well paced this movie is. there are a few
          other films on this list that similarly lure the audience in with
          their pacing, but i've never found myself as hypnotized as i did
          watching Afterson. i do not recall empathizing with a character so
          deeply in this manner… feeling all of his broken and unsatisfied soul,
          aware of time fleeting away, understanding the love he undoubtably
          carries for his daughter, watching him summon all of the remain will
          he has to try to make some sort of impact on someone he cares about,
          but ever-so-slowly recognizing he doesn't have enough left to give…
          and he knows it. ugh but watching a person who's given up on the world
          not only find, but summon the spirit to seek out, the occasional
          moment that justifies him still being here experiencing life and love…
          its just too much man lol anytime this movie comes up, the fact that
          it was director Charlotte Wells'{" "}
          <b>
            <i>first movie ever</i>
          </b>{" "}
          is worth bringing up bc omg wtf idk what else to say
        </p>
        <h2>
          9. <a href="https://boxd.it/27ww">Ratatouille</a>
        </h2>
        <blockquote>
          In many ways, the work of a critic is easy. We risk very little, yet
          enjoy a position over those who offer up their work and their selves
          to our judgment. We thrive on negative criticism, which is fun to
          write and to read. But the bitter truth we critics must face, is that
          in the grand scheme of things, the average piece of junk is probably
          more meaningful than our criticism designating it so. But there are
          times when a critic truly risks something, and that is in the
          discovery and defense of the <i>new</i>. The world is often unkind to
          new talent, new creations. The new needs friends. Last night, I
          experienced something new: an extraordinary meal from a singularly
          unexpected source. To say that both the meal and its maker have
          challenged my preconceptions about fine cooking is a gross
          understatement. They have rocked me to my core. In the past, I have
          made no secret of my disdain for Chef Gusteau's famous motto, "Anyone
          can cook." But I realize, only now do I truly understand what he
          meant. Not everyone can become a great artist; but a great artist
          <i>can</i> come from
          <i>anywhere</i>. It is difficult to imagine more humble origins than
          those of the genius now cooking at Gusteau's, who is, in this critic's
          opinion, nothing less than the finest chef in France. I will be
          returning to Gusteau's soon, hungry for more.
        </blockquote>
        <p>what a life affirming film. i will always cherish it 🐀👨‍🍳</p>
        <h2>
          8. <a href="https://boxd.it/hTha">Parasite</a>
        </h2>
        <div id="img">
          <img
            src={`${IMG_ROUTES.articles}${articleSpecs.id}/parasite.jpg`}
            alt="Kang-ho Song as Kim Ki-taek and Yeo-jeong Jo as Park Yeon-kyo in Bong Joon Ho's Oscar-winning thriller, Parasite (2019)"
          />
        </div>
        <p>
          ya know when something just like absolutely nails all the themes u
          actively want to seek out in every other piece of artwork u engage
          with? yeah.
        </p>
        <h2>
          7. <a href="https://boxd.it/28No">Pan's Labyrinth</a>
        </h2>
        <p>
          u guys seen this shit? i feel like we dont talk abt this shit enough.
          oh my god i love this movie there's something about how the story is
          told that cannot be undersold in its beauty. the horrors of our world
          sigh this is one of the most humanistic films ive seen and i vividly
          remember the impact it had on me when i first watched it on a laptop
          while laying down on the foot of my bed in like sophomore, actually
          prob junior, year of high school. i was so entranced i didnt move an
          inch. right now, i can still call myself back to that specific emotion
          it solicited in me… it was a constant wave of complicated, heavy,
          uncompromised, brutal, beauty. i've watched it a few times since, but
          i'm more than due for another viewing… guess i got plans for tmrw
          night
        </p>
        <h2>
          6. <a href="https://boxd.it/17ue">The Social Network</a>
        </h2>
        <blockquote>
          Sorry, my Prada’s at the cleaners along with my hoodie and my fuck-you
          flip-flops you pretentious douchebag.
        </blockquote>
        <p>⭐⭐⭐⭐⭐</p>
        <h2>
          5.{" "}
          <a href="https://letterboxd.com/film/oppenheimer-2023/">
            Oppenheimer
          </a>
        </h2>
        <div id="img">
          <img
            src={`${IMG_ROUTES.articles}${articleSpecs.id}/oppenheimer.jpg`}
            alt="Benny Safdie as Edward Teller in Oppenheimer (2023)"
          />
        </div>
        <p>
          if u wouldve told me i'd have Nolan ranked above Fincher prior to
          Oppenheimer's release (not to mention <i>Tenet</i>), i would've been
          like "whatever man, he's good and all but <i>Social Network</i> AND{" "}
          <i>Zodiac</i> exist??" anyways, this is far and away my fav nolan and
          has been since{" "}
          <a href="https://letterboxd.com/michaelbeebe/film/oppenheimer-2023/">
            i first watched/reviewed it
          </a>
        </p>
        <p>
          **note: i love <i>Tenet</i> and had to mention it, but i wouldnt put
          it above either of the Fincher films i referenced (just to quell the
          (uncultured) <i>Tenet</i> haters before they get upset abt not having
          the courage to submit themselves to that incredible film)… also
          <i>Interstellar</i> fucks too i forgot to say anything abt it so there
          ya go
        </p>
        <h2>
          4. <a href="https://boxd.it/2b4m">Spirited Away</a>
        </h2>
        <p>
          i think me loving Miyazaki so much, seeing every movie he's made, and
          having a few personal favs that i cherish more than{" "}
          <i>Spirited Away</i> all worked against it in these rankings…
        </p>
        <p>
          that is: this time i'm spending trying to justify{" "}
          <b>
            <i>only</i>
          </b>{" "}
          ranking it the{" "}
          <b>
            <i>fourth best film of the past 25 years</i>
          </b>{" "}
          is a testament to how incredible this piece of art is… plz forgive me,
          Miyazaki-san 😭🫡
        </p>
        <ul>
          <li>
            <a href="https://letterboxd.com/michaelbeebe/list/ghibli-ranked/">
              Studio Ghibli Movie Rankings
            </a>
          </li>
        </ul>
        <h2>
          3.{" "}
          <a href="https://letterboxd.com/film/mad-max-fury-road/">
            Mad Max: Fury Road
          </a>
        </h2>
        <p>
          <i>Mad Max</i> vs. <i>Spirited Away</i> for the bronze metal is an
          absolutely brutal matchup. im going with my heart and my gut (but
          things r getting interesting i dont like that i had to do this)
        </p>
        <h2>
          2.{" "}
          <a href="https://letterboxd.com/michaelbeebe/film/paprika-2006/reviews/">
            Paprika
          </a>{" "}
        </h2>
        <p>
          yep. it was always going to be these two films at the top. i obviously
          love this movie. i've probably said this about other movies in the
          past, but i can't think of a single film that aligns with my taste
          more than <i>Paprika</i>—
          <i>
            wait fuck nevermind lol i somehow forgot <i>End of Evangelion</i>{" "}
            existed for a split-second there
          </i>
          . ANYWAYS, its always overwhelming when i attempt to articulate—
          <i>ya know what</i>.
        </p>
        <p>
          i really don't want to even tiptoe around a critical analysis of this
          film… i genuinely don't know where (or how) to start because whenever
          i try to focus on any particular element, i'm reminded of three more
          things that i love and how they're all connected and build off each
          other an—
          <i>SOMEDAY i'll write a book or something,</i> but for now:{" "}
          <a href="https://letterboxd.com/michaelbeebe/film/paprika-2006/">
            this is what i wrote
          </a>{" "}
          when i watched this masterpiece for the first time.
        </p>
        <div id="img">
          <img
            src={`${IMG_ROUTES.articles}${articleSpecs.id}/paprika.gif`}
            alt="_ALT_TEXT_"
          />
        </div>
        <p>on another note…</p>
        <p>
          i'll forever mourn the immense, <i>immense</i> loss of the{" "}
          <b>singular, genius</b> artist who was Satoshi Kon. he made{" "}
          <a href="https://letterboxd.com/michaelbeebe/list/kon-ranked/">
            four outstanding films
          </a>{" "}
          and a brilliant anime all by age 46. he gave the world so much, and
          we've been robbed of what should've been decades more of his visionary
          artistry. fuck cancer so hard. <i>sigh</i>, well here are a few{" "}
          <b>great</b> youtube vids abt Kon for those interested:
        </p>
        <ul>
          <li className="pb-2">
            <a href="https://youtu.be/9GzZuRMwbW4?si=VxKEVmV0ZsItUMM-">
              The SATOSHI KON PROBLEM
            </a>{" "}
            (video essay by STEVEM)
          </li>
          <li>
            <a href="https://www.youtube.com/playlist?list=PLQuKbs0mEWs90Dxy0fopqOPQxSWHPne0Z">
              Satoshi Kon and Why Love Is All You Need
            </a>{" "}
            (video essay series by BREADSWORD)
            <ul>
              <li>
                <a href="https://youtu.be/2XGYr9_BiEU?si=VqCwBYrGkRmwk9dc">
                  Ep. 1 - <i>Perfect Blue</i>
                </a>
              </li>
              <li>
                <a href="https://youtu.be/1dfn-yMmvis?si=dTfTMLTVmqnDYS_F">
                  Ep. 2 - <i>Millenium Actress</i>
                </a>
              </li>
              <li>
                <a href="https://youtu.be/9EceEemWo0k?si=q1CMXJ5Us-8zCN6l">
                  Ep. 3 - <i>Tokyo Godfathers</i>
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <h2>
          1.{" "}
          <a href="https://letterboxd.com/michaelbeebe/film/portrait-of-a-lady-on-fire/reviews/">
            Portrait of a Lady on Fire
          </a>
        </h2>
        <div id="img">
          <img
            src={`${IMG_ROUTES.articles}${articleSpecs.id}/portrait-of-a-lady-on-fire.jpg`}
            alt="_ALT_TEXT_"
          />
        </div>
        <p>
          🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥 <b>hey this wasn't so hard!</b>{" "}
          🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
        </p>
        <div id="img">
          <img
            src={`${IMG_ROUTES.articles}${articleSpecs.id}/portrait-of-a-lady-on-fire1.jpg`}
            alt="_ALT_TEXT_"
          />
        </div>
      </main>
    </>
  );
}
