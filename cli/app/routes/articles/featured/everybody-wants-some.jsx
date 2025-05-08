import ArticleHeader from "../../../components/article/article-header";
import ReviewContent from "../../../components/article/review-content";
import { getFileSpecsById } from "../../../services/file-specs-service";
import { sleep } from "../../../services/loader-service";

export async function loader() {
  await sleep(300);
  const data = getFileSpecsById("everybody-wants-some");
  return data;
}

export default function EverybodyWantsSome({ loaderData }) {
  const fileSpecs = loaderData;
  return (
    <>
      <ArticleHeader fileSpecs={fileSpecs} />
      <main>
        <ReviewContent fileSpecs={fileSpecs} htmlMappers={[]} />
        <p>
          showed this to my dad, who played college baseball in the early 80s,
          which was pretty dope. he might&#39;ve dropped more &quot;this is so
          damn accurate&quot;s during those 117 minutes than anyone else has
          over the course of any other 117 minute timespan in human history. i
          liked this movie plenty my first time watching it, but i definitely
          felt much more this time around. its impossible not to admire
          Linklater. just in general. i mean his ability to conjure up distinct
          moments in time occurring at specific places from the perspectives of
          people who were of a certain age, but then for it all to feel so
          universal to the human experience? its fucking evocative.{" "}
        </p>
        <p>
          i want to focus on <i>Everybody Wants Some!!</i>, but i want to
          clarify that im not just referring to this and <i>Dazed</i>. the{" "}
          <i>Before Trilogy</i> films, especially <i>Sunrise</i>, are
          overflowing with these unique-yet-shared experiences (and they only
          need to follow two characters over a couple of hours to do it - so
          good).{" "}
        </p>
        <p>
          um yeah i guess i kind of dug myself a hole here and set the
          expectation for me to dive deeper on <i>Everybody Wants Some!!</i>. i
          don&#39;t really have much else to say relating it to what i&#39;ve
          been talking about just bc i don&#39;t really understand how Linklater
          does it (don&#39;t say &quot;the music&quot; obviously we all love the
          music and admit it helps but we don&#39;t have to be that reductive
          especially nowadays i mean the discourse is so-). the point i want to
          make about this film is that its not just a great hang. it is that, of
          course, but one of the things i locked in on this time around was the
          characters. they aren&#39;t just a who&#39;s who of college male
          archetypes from 1980. these guys almost all have depth and grow
          throughout the film (sorry, guy with the Narcissusian(?) relationship
          with his own butt; i don’t really know what else you were up to?). not
          only is there growth in a “welcome to college” sense, but the
          characters all become more open to new experiences and increasingly
          receptive to their peers. in a lot of ways, Glen Powell’s character is
          the catalyst for the team’s collective trend towards acceptance of
          each other’s idiosyncrasies and, moreso, their willingness to get out
          of their comfort zone in new environments.{" "}
        </p>
        <p>
          <strong> fourth wall break </strong>{" "}
        </p>
        <p>
          this thing abt the characters is actually the last section that im
          writing (u may b shocked to learn i tend to jump around a lot when i
          write these so i already wrote the conclusion and whatnot), but im
          pretty tired, so im only going to explore Powell’s character but i
          really did mean this to be more of a observation on the strength of
          the characters overall so just take my word on the others being great
          too (Pink Floyd guy is my favorite obviously - Fearless playing in the
          background while they smoked was so lit omg whatta banger. pretty
          early Floyd for them to be listening to its like a decade old at that
          point but it is timeless of course. ohhh wait lol that actually checks
          out that the 30 year old would be the only playing it and getting
          geeked up abt it omg im wasting energy).
        </p>
        <p>
          <strong> fourth wall reconstructed </strong>
        </p>
        <p>
          so, many eagle eyed viewers might have been yelling at their
          phones/laptops when i said Powell helped everyone open up. said ppl
          might’ve bemoaned my point with obtuse arguments like “dude they
          literally r all at college bro. this wasn&#39;t Glen Powell compelling
          them all to become better ppl through the power of charisma or some
          shit? like obviously they&#39;re gonna explore new things and stuff
          just move on to something else”… i get that pov and actually created
          this mythical mob of ppl exasperatedly talking to themselves abt my
          writing in order to refute it. sure, college is an opportunity and our
          main character, for example, would’ve surely spread his wings and
          tried out new things regardless of his influences (but it did help).
          the others, however, often push back on Powell’s insistence that they
          do XYZ and tease him for fully committing to each unfamiliar
          environment that they stumble into. we know that his character has an
          incentive to adapt to whatever crowd the group finds themselves
          interacting with: it’ll be easier to pick up chicks. this incentive
          has driven men to acclimate to new environments probably more so than
          any other (which is dope, so thank you if ur reading this and ur a
          girl which would be insane come to think of it), but i think Powell’s
          character isn’t solely, or even primarily, fueled by hookups. this is
          a guy who ran headfirst into the shittiest looking house in texas bc a
          teammate he met a week ago stumbled into a high school friend who said
          they could come inside if they want to hang out… and they&#39;d be
          hanging out with a bunch of 18 year olds they don&#39;t know who are
          one month into a punk rock obsession. honestly, they seemed pretty
          dope, but that isn&#39;t an invitation that most people would embrace
          as an opportunity to meet some new people with new perspectives - as
          evident by the two teammates who really don&#39;t want to go inside.
          plus, no hookup incentive! what we have on our hands is a complex
          character whose just as eager to learn as he is to get laid as he is
          to get drunk with his buds. he doesn’t directly hide his desire to
          keep evolving mentally and socially, but he rarely ever grants himself
          the freedom to act sincerely either. that was badly worded maybe, but
          what i mean is Powell’s character exhibits a lot of the traits that
          many guys do at that age in that environment: posturing everything you
          say as a bit, letting ppl think you only want to do XYZ to get with a
          girl, and idk lmk if you think of another example i should really have
          3 here. this is a very relatable character, yes, but also just like
          such common methods of protecting yourself for no good reason other
          than one of the biggest reasons ppl do stuff: in order to look cool
          and have ppl want to be around you and admire you ya know so on. this
          is getting a bit long and might be stretching things slash
          psychoanalyzing myself again, but i really love how this movie’s
          charismatic group leader is also a people pleaser who kind of just
          wants to fully immerse himself in anything and everything he comes
          across but also he really wants to be with his friends so he just says
          he’s doing it for the ladies bc it’ll get them to go with him and then
          he only really expresses his intelligence or new interests through
          bits/insults. at the end of the day, this might have been way too much
          on this character i hope i wasn&#39;t reaching too hard. next time i
          watch Linklater’s <i>Dazed and Confused</i>, i hope i remember to
          compare him to Randall “Pink” Floyd in my review. they play a similar
          role as the universally-liked, open-minded, caring guy at the center
          of their friend group(s). both not assholes in the slightest when they
          easily could be given their social status. i think “Pink” is already
          the genuine person that Powell’s character (still not gonna look up
          his name idc) is trying to suppress tho. idk there’s something there!
        </p>
        <p>
          quick sidebar: this is my fav Powell performance he’s so charismatic
          and such a realistic variation of the kind of guy you love to be
          around (great writing too ofc, maybe him and Linklater should write
          something together in the future <em>winky wink</em>)
        </p>
        <p>
          also i have no real theory on y tf this movie is called “Everybody
          Wants Some!!”… i guess its referring to sex maybe but that doesn&#39;t
          make sense bc, even tho they’re all horny college kids who always talk
          abt picking up chicks and r actually pretty successful at it in
          practice, this movie is clearly exploring the homoeroticism of a close
          knit group of college guys (i doubt my college besties r reading this,
          but if i’m talking to one of them rn: i was thinking of you in
          particular when i wrote that last sentence). just to keep exploring
          this… in addition to this being abt a group of undergrad dudes,
          they’re also teammates. i don&#39;t think Linklater decided to make
          them all baseball players for this reason or anything, but its another
          layer to their relationships with more clearly defined hierarchies and
          ample opportunity for isolated competition between individuals (i also
          played baseball so i guess thats relevant context idk). listen. im not
          just saying all this as a bit. Glen Powell’s character literally
          alludes to the homoerotic undertones throughout: comments on the
          groups’ collective desire to compete with one another, talks abt their
          inclination to discuss sex/women when they’re alone together, and
          brings up how often they choose to spend their time with each other
          instead of women when they all go out to a bar/party. i just think its
          a cool theme for the film to explore, but it doesn’t bring me any
          closer to understanding the title. if “Some!!” isn&#39;t referring to
          sex, then idk what its alluding to… just like experiences? i can get
          behind that, but i think this is just a really good movie by a great
          filmmaker that is just kind of loosely aligned with a title that
          probably is referencing the sex or sexual fervor maybe idk (plus
          there&#39;s only like 1 boob in the whole movie so ?).
        </p>
      </main>
    </>
  );
}
