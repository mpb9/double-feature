import ArticleHeader from "../../../components/article/article-header";
import { getFileSpecsById } from "../../../services/file-specs-service";
import { sleep } from "../../../services/loader-service";

export async function loader() {
  await sleep(300);
  const data = getFileSpecsById("trainspotting");
  return data;
}

export default function Trainspotting({ loaderData }) {
  const fileSpecs = loaderData;
  return (
    <>
      <ArticleHeader fileSpecs={fileSpecs} />
      <main>
        <h2 id="-2025-03-07-https-boxd-it-93m20x-">
          <a href="https://boxd.it/6h19k3">2024-04-12</a>
        </h2>
        <p>
          Alright. So, people have been struggling to cope with the
          meaninglessness of life{" "}
          <a href="https://www.denizcemonduygu.com/philo/">for a while</a>,
          anddd much has been said about how <i>(a)</i>moral/<i>(in)</i>
          effective/<i>(im)</i>
          permanent drugs can be as a means of tackling this dilemma. Now,
          before I continue I just wanna acknowledge maybe there is a meaning,
          maybe there is a god, maybe we’ll find it someday, <i>(but)</i> I’m
          just referring to the people who have ~in one way or another~ spent
          meaningful time coping with the idea that maybe that’s not what’s
          going on around here. That’s who this movie is about, who authored
          this story, and who I am{" "}
          <i>
            (but like I’m pretty chill with it I think - I just try to distract
            myself, and I’m good at it 99% of the time)
          </i>
          . <i>(BUT)</i>, and yes I expertly crafted this transition, the idea
          of how we distract and delude ourselves in order to feign
          satisfaction/meaning is the core conflict of this dope ass movie.
        </p>
        <p>
          <b>**on soapbox**</b>
        </p>
        <p>
          Ya know, you and I, the workers of the world, we’ve never really been
          granted the time and freedom to explore the existential crises that
          plague humanity. SURE, some brave outcasts have ventured beyond the
          limitations of their socioeconomic structures to pursue these aims. We
          revere them! Ya got Siddhartha Gautama, Jesus Christ, Henry David
          Thoreau, Frankenstein’s monster{" "}
          <i>(not really by choice I suppose)</i>, et CETERA. I mean, clearly we
          all must at least subconsciously admire their audacity to actually do
          the thing we all think might help us actually figure some of this
          stuff out, and we fantasize about the truths we really really hope
          they uncovered given the time and freedom they allotted themselves.
          I’m trying to tie this into the idea that we mythologize such acts due
          to how difficult it is to envision ourselves living outside of our
          current society, let alone actually do it. Furthermore, it's an
          admission of the limitations imposed on us by our culture. I’m sure
          you’re connecting the dots and encouraging me to bring drugs into this
          equation, but I did NOT lose track of the other, related, method of
          pseudo-escapism <i>(or whatever)</i> that this movie has more than one
          thing to say about: <b>consumerism!! 😁</b>
        </p>
        <p>
          Somewhere along this line, the great minds of the world held a
          conference and voted unanimously that we figured it all out forever.
          It was universally acknowledged that Adam Smith, through divine
          intervention, one can only assume, blessed us with the only true
          economic model, capitalism, and that no questions would be necessary
          until the end of time{" "}
          <i>(just assume I’m still on my soapbox until told otherwise)</i>. Ok
          <i> (otherwise)</i>, but this bequeathed upon the average Joe a new
          method of quantifying the significance of their existence. We consume
          in pursuit of fulfillment. We assign value to the amount of things
          we’re able to consume because that means that we contributed to
          society which should help us feel meaningful. Of course, we also
          consume to distract ourselves from the non-consumable things out
          there. The movie <i>TRAINSPOTTING</i> thinks this is all a load of
          bullshit. 90s art exudes a sense of “this is all bullshit” due to
          <i>-cutting myself off</i>. <i>Trainspotting</i>’s incredible{" "}
          <a href="https://www.youtube.com/watch?v=SaP7qmsQbSI&ab_channel=AsleKnudsen">
            opening sequence
          </a>{" "}
          bemoans the boredom and insignificance of a consumerist lifestyle, and
          it presents the hypothesis explored throughout the film straight from
          the protagonist's lips:{" "}
          <b>
            “I chose somethin' else. And the reasons? There are no reasons. Who
            needs reasons when you've got heroin?”
          </b>
        </p>
        <p>
          <b>
            <i>spoiler alert:</i>
          </b>{" "}
          Ewan McGregor, as Mark Renton, determines that consumerism trumps
          heroin at the end <i>(very good call)</i>, but I didn’t really find
          this realization all that intellectually stimulating{" "}
          <i>(big words)</i>. What really got my juices flowing is that the
          character claims to participate in the lifestyle that he finds most
          rewarding throughout the film whether it's heroin addict or modern day
          consumer. It’s made abundantly clear that the alternative to heroin
          isn’t very appealing, both through Mark’s voiceover narration and the
          depressing environments we witness him endure when partaking in normal
          society. <i>Trainspotting</i> is quick to point out{" "}
          <i>(and never stop pointing out)</i> the hypocrisy of those judging
          his heroin use. They’re all just addicted to goods, be it media,
          normalized drugs, etc. Mark is fully aware that a “three-piece suit on
          hire purchase in a range of fucking fabrics” isn’t gonna make him feel
          better than shooting up. He’s merely cheating the system. Going
          directly to the source - a source that’s far better than any good
          produced by the people that want society to comply with his idea of a
          meaningless existence. 
        </p>
        <p>
          The concept of him finding meaning in what he provides to
          shareholders, through the amount of things he can purchase, is a lie
          Mark’s unable to trick himself into accepting. Therefore, the only ~
          <i>utility</i>~ he finds in consumption is escape, but why go about
          doing all that when ~<i>heroin</i>~. It's fairly easy to understand
          how he arrived at this <i>(incorrect and oversimplified)</i>{" "}
          conclusion, and we obviously see the arguments for{" "}
          <i>
            (“take the best orgasm you’ve had, multiply it by 1000, and you’re
            still nowhere near it”)
          </i>{" "}
          and very much are forced to endure those against throughout the rest
          of the movie.
        </p>
        <p>
          Now, I’m going to acknowledge the things I won’t acknowledge much:
          addiction, risk of overdose and death, inability to care for/support
          loved ones, death indirectly caused by heroin, likelihood of exposing
          others to such risks by association, on and on… These all greatly
          contribute to the conclusion heroin &lt; consumerism, but the movie
          challenges Mark’s stance on a more dialectical level{" "}
          <i>
            (idk I just mean it kinda still pokes holes in his philosophy in
            addition to demonstrating the visceral horrors of heroin addiction)
          </i>
          .
        </p>
        <p>
          The movie initially presents Mark’s rationale as both an act of civil
          disobedience and a calculation of his day-to-day satisfaction with
          existence. I’ve already touched on the latter enough, but I’ll add
          that I don’t think Mark was a long-term thinker… which is a choice..
          <i>(that the drug prob made for him)</i>. BUT, <i>Trainspotting</i>’s
          genius emerges as it explores whether or not drug-infused escapism is
          a valid means of achieving an existence outside of one’s
          society/economy/etc. In this case, Mark’s up against
          consumerism/capitalism, and the film chronicles the immense pressure
          that it puts on Mark to submit. Mark, and I might be projecting here,
          has a bias against consumption of goods produced in the current
          system. He’s choosing not to live in a world where that’s required
          through his use of heroin, but he’s still restricted by the same
          constraints that bind consumption of legally purchased goods
          <i> (externally & internally)</i>. Externally, he needs to pay for
          heroin just like he would anything else because it being illegal
          doesn’t mean it’s not made for profit or something. In order to do so,
          he must negatively impact others far more than he would as an employee
          for like any company basically <i>(at least he’s not a landlord)</i>.
          Internally, he admits that any amount of heroin will still never be
          enough. Even if he believes that it far exceeds anything he could buy
          at <i>X</i> store, the high is still just a product of capitalism that
          fails in its mission to elevate the burden of meaning/purpose. This,
          again, in addition to the more obvious consequences of heroin use.
          Therefore, we observe Mark fail to exist outside of the “life” he’s
          identified as pretty much pointless. 
        </p>
        <p>
          As the repercussions of heroin addiction make it more difficult for
          him to reap any benefits, the calculation finally shifts and he’s
          forced to admit total and utter defeat. He returns to society and his
          sense of pleasure adjusts to the point where he’s ok with life as a
          realtor. Ups and downs continue, and there’s no promise that he’ll
          find prolonged stability or pleasure after the movie ends. At the end
          of the day, in my opinion, Mark has not changed throughout the movie.
          While he may tell us that he chooses his life based on the questions
          explored within the film, his ideology has always been to avoid
          whichever path requires more of a mental burden. When heroin seemed
          easier than confronting the mundane dissatisfaction of the consumer
          lifestyle, he chose heroin and vice versa. Not only does the film
          oppose the theory that you can pursue civil disobedience through drug
          use <i>(addiction)</i>, it calls out that idea as nothing more than an
          excuse to indulge in something worse - it's purely rationalization for
          perpetuating an addiction at the expense of yourself and others. 
        </p>
        <p>
          The film is bleak in that it doesn’t portray “life” as fulfilling unto
          itself, and it really has no issue hammering you over the head with
          critics of capitalism. The moral isn’t that we should all pledge
          allegiance to Adam Smith and submit to consumerism, it's that we
          shouldn’t use society as an excuse to perpetuate self-destructive
          lifestyles. We must choose our means of escapism wisely and not give
          too much power to habits just because we can identify the shortcomings
          of our environment. Anyways this movie fucks, stylized out the wazoo,
          dope fits, nuanced cynicism, forceful and traumatic ass moments, and
          also really funny/energetic. I don’t have any clue how they pulled it
          off. <b>Ewan is a hottie.</b>
        </p>
      </main>
    </>
  );
}
