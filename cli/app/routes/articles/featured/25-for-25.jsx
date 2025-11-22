import ArticleHeader from "../../../components/articles/article-header";
import ArticleInfo from "../../../components/articles/article-info";
import { IMG_ROUTES } from "../../../constants";
import { sleep } from "../../../services/loader-service";
import { articleMetaBuilder } from "../../../services/meta-service";
import { getArticleSpecsById } from "../../../services/specs-service";
export async function loader() {
  await sleep(300);
  const data = getArticleSpecsById("25-for-25");
  return data;
}
export function meta() {
  const reviewMeta = articleMetaBuilder(
    "25 for '25",
    "jpeg",
    "The 25 Best Films of the 21st Century (so far) (according to Michael Beebe)."
  );
  return reviewMeta;
}
export default function TwentyFiveForTwentyFive({ loaderData }) {
  const articleSpecs = loaderData;

  return (
    <>
      <ArticleHeader articleSpecs={articleSpecs} />
      <main>
        <ArticleInfo articleSpecs={articleSpecs} htmlMappers={[]} />
        <h2 style={{ fontSize: "1.8rem" }}>
          The 25 Best Films of the 21st Century (so far)
        </h2>
        <ul>
          <li>
            Only caveat: <b>one film per director</b>
          </li>
          <li>
            Shoutout{" "}
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
          25.{" "}
          <a href="https://boxd.it/dGNE" target="_blank">
            Lady Bird
          </a>{" "}
          <b className="text-sm font-light">(2017)</b>
        </h2>
        <h2>
          24.{" "}
          <a href="https://boxd.it/2416" target="_blank">
            Hot Fuzz
          </a>{" "}
          <b className="text-sm font-light">(2007)</b>
        </h2>
        <h2>
          23.{" "}
          <a href="https://boxd.it/20hO" target="_blank">
            Superbad
          </a>{" "}
          <b className="text-sm font-light">(2007)</b>
        </h2>
        <h2>
          22.{" "}
          <a href="https://boxd.it/eOCm" target="_blank">
            Get Out
          </a>{" "}
          <b className="text-sm font-light">(2017)</b>
        </h2>
        <h2>
          21.{" "}
          <a href="https://boxd.it/948A" target="_blank">
            The Handmaiden
          </a>{" "}
          <b className="text-sm font-light">(2016)</b>
        </h2>
        <h2>
          20.{" "}
          <a href="https://boxd.it/d2hI" target="_blank">
            The Favourite
          </a>{" "}
          <b className="text-sm font-light">(2018)</b>
        </h2>
        <h2>
          19.{" "}
          <a href="https://boxd.it/hNVe" target="_blank">
            Hereditary
          </a>{" "}
          <b className="text-sm font-light">(2018)</b>
        </h2>
        <h2>
          18.{" "}
          <a href="https://boxd.it/jUk4" target="_blank">
            Everything Everywhere All at Once
          </a>{" "}
          <b className="text-sm font-light">(2022)</b>
        </h2>
        <p>
          Odds are there's going to be a pretty recognizable pattern that
          emerges amongst the films on this list. So, as someone whose been told
          by a professional that their hypercritical self-awareness is a
          habitual defense mechanism, I'm naturally compelled to admit something
          off the bat before anyone else starts judging me for it:{" "}
          <b>I'm a real sucker for sincere cinema</b>.
        </p>
        <p>
          <i>
            Yes, I'm aware that I wrote all that stuff about being cronically
            self-aware as an excuse to be overtly self-aware in order to get
            ahead of—you know what… nevermind.
          </i>
        </p>
        <div id="img">
          <img
            src={`${IMG_ROUTES.articles}${articleSpecs.id}/everything-everywhere-all-at-once-00.jpeg`}
            alt=""
          />
        </div>
        <p>
          In any case, I should probably jot down something about{" "}
          <i>Everything Everywhere All at Once</i> this point. Luckily, given
          that it made this list, you won't be surprised to learn that I love
          this movie. During the months leading up to its release, I obsessively
          rewatched{" "}
          <a href="https://letterboxd.com/michaelbeebe/list/trailers/detail/">
            the trailer
          </a>
          , giddily musing over how the hell a movie could possibly be this many
          things at once <i>(sorry, unintentional pun, sigh)</i>. In retrospect,
          while I love the chaotic maximalism, brazen weirdness, and complete
          untetheredness(?) of this movie, its the emotional resonance that
          seeps out of its core that spoke to me the most. Exploring the
          relationships between first and second generation immigrants is
          fertile ground for establishing captivating character dynamics, but
          this movie does so much more than simply build strong characters
          capable of holding together an admittedly absurd plot. The power of
          the film lies at its most human level. Each member of the family feels
          trapped in their shared circumstance in a unique way. Furthermore,
          they each have their own way of expressing how they feel and unique
          stategies coping with their internal struggles. Evelyn wades in the
          what-ifs of her past and resists change as a means of preserving any
          semblence of the life that she regrets ever leaving. Waymond is on the
          verge of giving up his fruitless fight to cobble together enough
          happiness to get his family through the unfortunate financial
          circumstances that he feels somewhat responsible for. Joy not only
          must navigate being a second-generation immigrant teenager, but she
          doesn't feel accepted for who she is from her own family, leading to
          apathy.
        </p>
        <p>
          The movie theater is a magical place, man. I watched this for the
          first time with my then-girlfriend, a second-generation Chinese
          immigrant herself, and I cannot begin to describe how powerful it was
          to, in real time, witness someone feel so seen and understood by a
          film. These dynamics are so universal to the immigrant experience, and
          I'm grateful that <i>Everything Everywhere All at Once</i> was able
          to, not only represent them so well for the families that struggle
          with them, but raise the level of empathy of non-immigrants towards
          those who just have it harder than us in so many ways.
        </p>
        <h2>
          17.{" "}
          <a href="https://boxd.it/1JP0" target="_blank">
            All About Lily Chou-Chou
          </a>{" "}
          <b className="text-sm font-light">(2001)</b>
        </h2>
        <p>
          When I put this movie on for the first time a few months ago, I
          couldn't even get through the{" "}
          <a
            href="https://youtu.be/oKGoEvvZXzI?si=xwDF9D2PnWiFALWZ"
            target="_blank"
          >
            opening sequence
          </a>{" "}
          without spamming my friends with texts professing my love for it. I'm
          just going to let a few of my initial messages speak for themselves:
        </p>
        <div>
          <img
            src={`${IMG_ROUTES.articles}${articleSpecs.id}/all_about_lily_chou_chou-2001-00.jpeg`}
            alt="Text 1 - All About Lily Chou-Chou (2001)"
          />
        </div>
        <div>
          <img
            src={`${IMG_ROUTES.articles}${articleSpecs.id}/all_about_lily_chou_chou-2001-01.jpeg`}
            alt="Text 2 - All About Lily Chou-Chou (2001)"
          />
        </div>
        <p>
          <i>
            Yes, it was incredibly late at night, and yes, I was out on the town
            prior to watching, and yes, I may have been under the influence of a
            few substances... BUT THAT WAS FAR FROM THE FIRST TIME I FOUND
            MYSELF WATCHING A MOVIE IN THAT STATE AND LEMME TELL YA:
          </i>
        </p>
        <p>
          This movie f*cks every which way no matter what state of mind you're
          in <i>(and yes, I've rewatched it since and it still does).</i>
        </p>

        <p
          style={{
            marginBottom: "0.5rem",
            marginTop: "1.75rem",
            textDecoration: "underline",
            textUnderlineOffset: "2px",
          }}
        >
          P.S.
        </p>
        <p style={{ marginTop: "0px" }}>
          <i>All About Lily Chou-Chou</i> is a deeply messed up movie and is an
          incredibly difficult watch for the vast majority of the film{" "}
          <i>(despite how i've been making it sound)</i>…{" "}
          <b>
            **genuine trigger warnings for sexual assault, bullying, and
            suicide**
          </b>
          . That being said, its one of the most beautifully shot films I've
          ever seen. The themes of alienation, escapism, peer-pressure, social
          media, youth, and fandom are explored in such a raw, unflinching
          manner. There's a universality to the film's depictions of the horrors
          of adolescence, yet its simultaneously hyper-specific in its physical
          and temporal setting (Japan in the late 90s/early 2000s). This movie
          feels <b>so</b> lived in and only through such specificity of place
          and time can it ellicit such an emotional response from a global
          audience.
        </p>
        <p>
          I've been thinking a lot about how complicated and impractical it is
          to find a community in our current society. Its been on my mind for a
          variety of reasons{" "}
          <i>
            (less-so that I've been feeling especially lonely and more-so that
            I've just been consuming a lot of media that touches on the subject)
          </i>{" "}
          and, while alienation <i>(also see: escapism)</i> is a common theme on
          this list, <i>All About Lily Chou-Chou</i> is the film that keeps
          coming to mind when I try to think through the socio-economic factors
          that contribute to the loneliness epidemic that's plagued the youth
          for decades. Sigh, anyways, I'm done rambling, but I just want to add
          that this movie also has such an{" "}
          <a
            href="https://letterboxd.com/michaelbeebe/list/soundtracks/detail/"
            target="_blank"
          >
            incredible soundtrack
          </a>
          , so have fun checking that out if you trust my music taste.
        </p>
        <h2>
          16.{" "}
          <a href="https://boxd.it/k4BO" target="_blank">
            The Brutalist
          </a>{" "}
          <b className="text-sm font-light">(2024)</b>
        </h2>
        <blockquote>
          My buildings were designed to endure such erosion.
        </blockquote>
        <p>
          A self-indulgent, uncompromised 3 hour epic about the lie at the core
          of the American dream, how capitalism shackles artists, escapism thru
          drugs (and f*cking Zionism), the inability of the bourgeois class to
          engage with art… I don't know its just all very up my alley. Oh– and
          it took fucking risks!
        </p>
        <ul>
          <li>
            Check out this very thought-provoking{" "}
            <a
              href="https://open.spotify.com/episode/2fUO43K5JsFtCT1bWbcoFp?si=ug-ZU6NMQ028i6zAxUXL_w"
              target="_blank"
            >
              The Big Picture podcast episode featuring Adam Nayman
            </a>
          </li>
        </ul>
        <h2>
          15.{" "}
          <a href="https://boxd.it/1Y2i" target="_blank">
            Children of Men
          </a>{" "}
          <b className="text-sm font-light">(2006)</b>
        </h2>
        <div id="img">
          <img
            src={`${IMG_ROUTES.articles}${articleSpecs.id}/children_of_men-2006-00.jpeg`}
            alt="'Clive Owen's character, Theo, visits a friend at Battersea Power Station, which is now some combination of government building and private collection. Cultural treasures - Michelangelo's David, Picasso's Guernica, Pink Floyd's inflatable pig - are preserved in a building that is itself a refurbished heritage artifact.' - Mark Fisher"
          />
        </div>
        <p>
          lol. If The Brutalist was "up my alley", this movie features{" "}
          <a
            href="https://youtu.be/wrALRx95mHs?si=5nY18gnUy8ByZVA0"
            target="_blank"
          >
            this scene
          </a>
          . Its unbearable how relevant this film is specifically in regard to
          America's despicable treatment of immigrants (illegal, legal, whatever
          it shouldn't matter they're people like holy shit have some empathy).
          The filmmaking in this is maybe the best of the century? The way it
          demonstrates the infighting that seems to always pop up between
          Leftist factions in the face of oppression is dope + Cuaron empathizes
          with the correct side + we need to work together to fight the real
          enemy.
        </p>
        <ul>
          <li>
            Pretty dope{" "}
            <a
              href="https://www.goodreads.com/quotes/11243889-in-one-of-the-key-scenes-in-alfonso-cuaron-s-2006"
              target="_blank"
            >
              opening quote from Mark Fisher's <i>Capitalist Realism</i>
            </a>{" "}
            regarding <i>Children of Men</i>
          </li>
        </ul>
        <h2>
          14.{" "}
          <a href="https://boxd.it/2b1M" target="_blank">
            Crouching Tiger, Hidden Dragon
          </a>{" "}
          <b className="text-sm font-light">(2000)</b>
        </h2>
        <div id="img">
          <img
            src={`${IMG_ROUTES.articles}${articleSpecs.id}/crouching_tiger_hidden_dragon-2000-00.jpeg`}
            alt="Zhang Ziyi and Michelle Yeoh in Crouching Tiger, Hidden Dragon (2000)"
          />
        </div>
        <p>
          This movie blew away my expectations. What I was anticipating would've
          been dope too, but I mean come on now. No one expects something of
          this magnitude going into a first-time viewing of any film. I was
          aware of the prestige and universal acclaim, but this is truly an epic
          in every sense of the word.
        </p>
        <p>
          To briefly touch on the fight scenes, they f*cking float. lol. The
          moment in the{" "}
          <a
            href="https://youtu.be/ltY3ZLA6dA8?si=1ndg1AeQyZkaYibg"
            target="_blank"
          >
            initial showdown
          </a>{" "}
          between Zhang Ziyi and Michelle Yeoh where they both just take off
          into the air holy sh*t its an "OMG… I love the movies" moment. It
          instantly communicates the enchanting and romantic nature of these
          mythic martial artists and their mastery over the craft, and, again,
          it looks cool as f*ckkkkk.
        </p>
        <p>
          So, the leads of this movie (Ziyi, Yeoh, and Chow Yun-Fat) play maybe
          the three coolest people to ever exist? All of them deliver phenomenal
          performances, but its impossible not to key in on Zhang Ziyi. As a 20
          year old, she's trusted with large chunks of a film that also features
          two of Asia's most reknown and beloved actors. Needless to say, Ziyi
          was more than up to the task{" "}
          <i>(ugh her character is also just so cool this movie is so cool)</i>.
        </p>
        <p>
          There's a lot that contributes to the magic of this movie (too much to
          try and list rn), but my favorite theme is the suppression of desire
          between Yeoh and Yun-Fat's characters. I'm not going to spoil, but if
          you've seen it you know the vibe. What a banger.
        </p>
        <h2>
          13.{" "}
          <a href="https://boxd.it/7bQA" target="_blank">
            Whiplash
          </a>{" "}
          <b className="text-sm font-light">(2014)</b>
        </h2>
        <p>
          <i>
            You're so pressed about whether you're rushing or dragging, but when
            was the last time you asked yourself why the f*ck you give such a
            sh*t? Do you even remember the moment that you stopped loving the
            thing you spend every waking moment trying to perfect? Are you aware
            that you're never going to be able to? Are you scared? Do you need
            your abusive teacher just as much as he needs you? Do you feel more
            at ease when you're with someone who pushes you further than you're
            capable of being pushed? How have you fallen so deeply into
            obsession? Or, why are you so scared of no longer being able to
            indulge yourself in this obsession that you're making a
            father-figure out of a man whose life has already been broken by it?
            There is no perfecting it, you're now only capable of seeking
            satisfaction through the same cycle of trauma that's broken the
            fools that went down this path before you. C'mon, Miles. Let's just
            go to the movies or something instead.
          </i>
        </p>
        <p>
          Oooo I love this movie. Its in the pantheon of the{" "}
          <i>movie-about-how-self-destructive-it-is-to-make-movies</i> subgenre,
          and, since its Damien Chazelle, obviously the metaphor for filmmaking
          is jazz music (<i>psst</i>{" "}
          <a
            href="https://letterboxd.com/director/damien-chazelle/"
            target="_blank"
          >
            all of Chazelle's movies
          </a>{" "}
          fit in this subgenre). The ending is misinterpreted by some people,
          but damn is it devastating…
        </p>
        <h2>
          12.{" "}
          <a href="https://boxd.it/1JzG" target="_blank">
            Inglourious Basterds
          </a>{" "}
          <b className="text-sm font-light">(2009)</b>
        </h2>
        <p>
          This was my fav movie throughout high school, and I'm very due to
          watch it again. It remains my favorite Tarantino{" "}
          <i>(also, f*ck Nazis)</i>.
        </p>
        <p>
          Its undeniable how entrenched some of these scenes/set-pieces are in
          the minds of everyone who watched them. That feat alone is incredibly
          special, but this movie's sum is still greater than its parts… just
          kind of like a masterclass I suppose lol. Also, excuse my language,
          but Quentin stop being a little self-righteous b*tch and just make
          another movie why are you more worried abt your legacy than just
          making a movie about whatever you're into at the time? You made a dumb
          rule for yourself and you're the only one who cares anddd well yeah I
          just like want you to get over yourself because you make great movies.
          Not to mention you're wrong to universally criticize the later career
          works of directors: Auters like Miyazaki and Scorsese both made your
          theory look stupid as hell in the past couple of years alone, and
          those r just examples off the dome. Do whatever you want, I guess. I
          don't have any right to demand something from an artist, but damn dude
          I do not understand your mindset right now.
        </p>
        <h2>
          11.{" "}
          <a href="https://boxd.it/pUfA" target="_blank">
            Dune: Part 2
          </a>{" "}
          <b className="text-sm font-light">(2024)</b>
        </h2>
        <p>
          I don't think I've ever written anything significant abt <i>Dune</i>,
          which is an unusual thing for me to <i>(not)</i> do when I love
          something to the extent that I love <i>Dune</i>. the movies both fuck
          (and so will <i>Messiah</i>, f*ck the doubters + trust in Villeneuve's
          vision), and the books are among my all-time favorites (mandatorily
          acknowledging that i dont read much ngl). This might be another
          example of the "Parasite Effect", a term that I just made up. It
          occurs when I'm just so passionate about the themes explored and fully
          aligned with the critiques levelled in films (those akin to{" "}
          <i>Parasite</i>/<i>Dune</i>
          ), and its hard for me to refrain from just saying "hell yeah" or
          simply listing all the things I love about them. Someday I'll get
          around to writing more thoughtfully about <i>Dune</i>, but today is,
          yet again, not that day.
        </p>
        <p>Anyways, here are my favorite books (fiction) (unordered):</p>
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
        <p>(i like sci-fi)</p>
        <h2>
          10.{" "}
          <a href="https://boxd.it/Arw0" target="_blank">
            Aftersun
          </a>{" "}
          <b className="text-sm font-light">(2022)</b>
        </h2>
        <div id="img">
          <img
            src={`${IMG_ROUTES.articles}${articleSpecs.id}/aftersun-2022-00.jpeg`}
            alt="Frankie Corio and Paul Mescal in Aftersun (2022)"
          />
        </div>
        <p>
          Ok this is the highest ranked movie that I've only watched once. And,
          I watched it on an airplane. If you've seen it, then you can probably
          picture me hiding in my hoodie letting tears run down my face while
          the flight attendant asked if I wanted any water or Biscoff cookies. I
          cannot do justice to how well paced this movie is. There are a few
          other films on this list that similarly lure the audience in with
          their pacing, but I've never found myself as hypnotized as I did
          watching <i>Afterson</i>. I do not recall empathizing with a character
          so deeply in this manner… feeling all of his broken and unsatisfied
          soul, aware of time fleeting away, understanding the love he
          undoubtably carries for his daughter, watching him summon all of the
          remain will he has to try to make some sort of impact on someone he
          cares about, but ever-so-slowly recognizing he doesn't have enough
          left to give… and he knows it. Ugh, but watching a person who's given
          up on the world not only find, but summon the spirit to seek out the
          occasional moment that justifies him still being here experiencing
          life and love… Its just too much man lol anytime this movie comes up,
          the fact that it was director Charlotte Wells'{" "}
          <b>
            <i>first movie ever</i>
          </b>{" "}
          is worth bringing up because oh my gosh what the idk what else to say.
        </p>
        <h2>
          9.{" "}
          <a href="https://boxd.it/27ww" target="_blank">
            Ratatouille
          </a>{" "}
          <b className="text-sm font-light">(2007)</b>
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
        <p>What a life affirming film. I will always cherish it 🐀👨‍🍳.</p>
        <h2>
          8.{" "}
          <a href="https://boxd.it/hTha" target="_blank">
            Parasite
          </a>{" "}
          <b className="text-sm font-light">(2019)</b>
        </h2>
        <div id="img">
          <img
            src={`${IMG_ROUTES.articles}${articleSpecs.id}/parasite-2019-00.jpeg`}
            alt="Kang-ho Song as Kim Ki-taek and Yeo-jeong Jo as Park Yeon-kyo in Bong Joon Ho's Oscar-winning thriller, Parasite (2019)"
          />
        </div>
        <p>
          You know when something just like absolutely nails all the themes you
          actively want to seek out in every other piece of artwork you engage
          with? Yeah.
        </p>
        <h2>
          7.{" "}
          <a href="https://boxd.it/28No" target="_blank">
            Pan's Labyrinth
          </a>{" "}
          <b className="text-sm font-light">(2006)</b>
        </h2>
        <p>
          You guys seen this sh*t? I feel like we don't talk about this shit
          enough. Oh my god I love this movie there's something about how the
          story is told that cannot be undersold in its beauty. The horrors of
          our world <i>sigh</i> this is one of the most humanistic films I've
          seen, and I vividly remember the impact it had on me when I first
          watched it on a laptop while laying down on the foot of my bed in like
          sophomore, actually probably junior, year of high school. I was so
          entranced I didnt move an inch. Right now, I can still call myself
          back to that specific emotion it solicited in me… it was a constant
          wave of complicated, heavy, uncompromised, brutal, beauty. I've
          watched it a few times since, but I'm more than due for another
          viewing… guess I got plans for tomorrow night.
        </p>
        <h2>
          6. <a href="https://boxd.it/17ue">The Social Network</a>{" "}
          <b className="text-sm font-light">(2010)</b>
        </h2>
        <blockquote>
          Sorry, my Prada’s at the cleaners along with my hoodie and my fuck-you
          flip-flops you pretentious douchebag.
        </blockquote>
        <p>⭐⭐⭐⭐⭐</p>
        <h2>
          5.{" "}
          <a
            href="https://letterboxd.com/film/oppenheimer-2023/"
            target="_blank"
          >
            Oppenheimer
          </a>{" "}
          <b className="text-sm font-light">(2023)</b>
        </h2>
        <div id="img">
          <img
            src={`${IMG_ROUTES.articles}${articleSpecs.id}/oppenheimer-2023-00.jpeg`}
            alt="Benny Safdie as Edward Teller in Oppenheimer (2023)"
          />
        </div>
        <p>
          If you would've told me I'd have Nolan ranked above Fincher prior to{" "}
          <i>Oppenheimer</i>'s release (not to mention <i>Tenet</i>), I would've
          been like "whatever man, he's good and all but <i>Social Network</i>{" "}
          AND <i>Zodiac</i> exist??" Anyways, this is far and away my fav Nolan
          and has been since{" "}
          <a
            href="https://letterboxd.com/michaelbeebe/film/oppenheimer-2023/"
            target="_blank"
          >
            I first watched/reviewed it
          </a>
          .
        </p>

        <p style={{ marginBottom: 0 }}>
          <b>Note:</b>
        </p>
        <p style={{ marginTop: "0.25rem" }}>
          I love <i>Tenet</i> and had to mention it, but I wouldn't put it above
          either of the Fincher films I referenced (just to quell the
          (uncultured) <i>Tenet</i> haters before they get upset about not
          having the courage to submit themselves to that incredible film)… Also
          <i>Interstellar</i> fucks too. I forgot to say anything abt it so
          there ya go.
        </p>
        <h2>
          4.{" "}
          <a href="https://boxd.it/2b4m" target="_blank">
            Spirited Away
          </a>{" "}
          <b className="text-sm font-light">(2001)</b>
        </h2>
        <p>
          I think me loving Miyazaki so much, seeing every movie he's made, and
          having a few personal favs that I cherish more than{" "}
          <i>Spirited Away</i> all worked against it in these rankings…
        </p>
        <p>
          that is: the time I'm currently spending trying to justify{" "}
          <b>
            <i>only</i>
          </b>{" "}
          ranking it the{" "}
          <b>
            <i>fourth best film of the past 25 years</i>
          </b>{" "}
          is a testament to how incredible this piece of art is… please forgive
          me, Miyazaki-san 😭🫡
        </p>
        <ul>
          <li>
            <a
              href="https://letterboxd.com/michaelbeebe/list/ghibli-ranked/"
              target="_blank"
            >
              Studio Ghibli Movie Rankings
            </a>
          </li>
        </ul>
        <h2>
          3.{" "}
          <a
            href="https://letterboxd.com/film/mad-max-fury-road/"
            target="_blank"
          >
            Mad Max: Fury Road
          </a>{" "}
          <b className="text-sm font-light">(2015)</b>
        </h2>
        <p>
          <i>Mad Max</i> vs. <i>Spirited Away</i> for the bronze metal is an
          absolutely brutal matchup. I'm going with my heart and my gut (but
          things are getting interesting… I don't like that I had to do this).
        </p>
        <h2>
          2.{" "}
          <a
            href="https://letterboxd.com/michaelbeebe/film/paprika-2006/reviews/"
            target="_blank"
          >
            Paprika
          </a>{" "}
          <b className="text-sm font-light">(2006)</b>
        </h2>
        <p>
          Yep. It was always going to be these two films at the top. I obviously
          love this movie. I've probably said this about other movies in the
          past, but I can't think of a single film that aligns with my taste
          more than <i>Paprika</i>—
          <i>
            wait f*ck nevermind lol… I somehow forgot <i>End of Evangelion</i>{" "}
            existed for a split-second there
          </i>
          . ANYWAYS, its always overwhelming when I attempt to articulate—
          <i>ya know what</i>.
        </p>
        <p>
          I really don't want to even tiptoe around a critical analysis of this
          film… I genuinely don't know where (or how) to start because whenever
          I try to focus on any particular element, I'm reminded of three more
          things that I love and how they're all connected and build off each
          other an—
          <i>SOMEDAY I'll write a book or something,</i> but for now:{" "}
          <a
            href="https://letterboxd.com/michaelbeebe/film/paprika-2006/"
            target="_blank"
          >
            this is what I wrote
          </a>{" "}
          when I watched this masterpiece for the first time.
        </p>
        <div id="img">
          <img
            src={`${IMG_ROUTES.articles}${articleSpecs.id}/paprika-2006-00.avif`}
            alt="_ALT_TEXT_"
          />
        </div>
        <p>On another note…</p>
        <p>
          I'll forever mourn the immense, <i>immense</i> loss of the{" "}
          <b>singular, genius</b> artist who was Satoshi Kon. He made{" "}
          <a
            href="https://letterboxd.com/michaelbeebe/list/kon-ranked/"
            target="_blank"
          >
            four outstanding films
          </a>{" "}
          and a brilliant anime all by age 46. He gave the world so much, and
          we've been robbed of what should've been decades more of his visionary
          artistry. F*ck cancer so hard. <i>Sigh</i>, well here are a few{" "}
          <b>great</b> YouTube videos about Kon for those interested:
        </p>
        <ul>
          <li className="pb-2">
            <a
              href="https://youtu.be/9GzZuRMwbW4?si=VxKEVmV0ZsItUMM-"
              target="_blank"
            >
              The SATOSHI KON PROBLEM
            </a>{" "}
            (video essay by STEVEM)
          </li>
          <li>
            <a
              href="https://www.youtube.com/playlist?list=PLQuKbs0mEWs90Dxy0fopqOPQxSWHPne0Z"
              target="_blank"
            >
              Satoshi Kon and Why Love Is All You Need
            </a>{" "}
            (video essay series by BREADSWORD)
            <ul>
              <li>
                <a
                  href="https://youtu.be/2XGYr9_BiEU?si=VqCwBYrGkRmwk9dc"
                  target="_blank"
                >
                  Ep. 1 - <i>Perfect Blue</i>
                </a>
              </li>
              <li>
                <a
                  href="https://youtu.be/1dfn-yMmvis?si=dTfTMLTVmqnDYS_F"
                  target="_blank"
                >
                  Ep. 2 - <i>Millenium Actress</i>
                </a>
              </li>
              <li>
                <a
                  href="https://youtu.be/9EceEemWo0k?si=q1CMXJ5Us-8zCN6l"
                  target="_blank"
                >
                  Ep. 3 - <i>Tokyo Godfathers</i>
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <h2>
          1.{" "}
          <a
            href="https://letterboxd.com/michaelbeebe/film/portrait-of-a-lady-on-fire/reviews/"
            target="_blank"
          >
            Portrait of a Lady on Fire
          </a>{" "}
          <b className="text-sm font-light">(2019)</b>
        </h2>
        <div id="img">
          <img
            src={`${IMG_ROUTES.articles}${articleSpecs.id}/portrait_of_a_lady_on_fire-2018-00.jpeg`}
            alt="_ALT_TEXT_"
          />
        </div>
        <p style={{ textAlign: "center" }}>
          🔥🔥🔥🔥🔥🔥🔥 <b className="mx-2">Hey, this wasn't so hard!</b>{" "}
          🔥🔥🔥🔥🔥🔥🔥
        </p>
        <div id="img">
          <img
            src={`${IMG_ROUTES.articles}${articleSpecs.id}/portrait_of_a_lady_on_fire-2018-01.jpeg`}
            alt="_ALT_TEXT_"
          />
        </div>
      </main>
    </>
  );
}
