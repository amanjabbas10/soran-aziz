import img1 from "../images/logo 4.png";
import img2 from "../images/photo under navbar.png";
import img3 from "../images/01.png";
import img4 from "../images/02.png";
import img5 from "../images/03.png";
import img6 from "../images/04.png";
import img7 from "../images/05.png";
import img8 from "../images/07.png";
import img9 from "../images/1.png";
import img10 from "../images/2.png";
import img11 from "../images/3.png";
import img12 from "../images/7.png";
import img13 from "../images/9.png";
import img14 from "../images/8.png";
import img15 from "../images/11.png";
import img16 from "../images/12.png";
import img17 from "../images/13.png";
import img18 from "../images/14.png";
import img19 from "../images/15.png";
import img20 from "../images/100.png";
import img21 from "../images/cont.png";

const Nav1 = () => {
  return (
    <div>
      <div className="nav">
        <img src={img1} />
        <a href="#">Home</a>
        <a href="#Skill">Skill</a>
        <a href="#Project">Project</a>
        <a href="#Contact">Contact</a>
        {/* this is icon and you can say logo social */}
        <div className="social">
          <a href="https://www.instagram.com/graphic_desgner_/" target="blank">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.youtube.com/@soranaziz-ov7ji" target="blank">
            <i class="fa-brands fa-youtube"></i>
          </a>
          <a
            href="https://www.tiktok.com/@graphicdesigner163?_t=ZS-8uu2ClSkNoW"
            target="blank"
          >
            <i class="fa-brands fa-tiktok"></i>
          </a>
        </div>
        {/* this is icon and you can say logo social */}
      </div>
      {/* bashe peshawa zher navbar */}
      {/* bashe peshawa zher navbar */}
      <div className="first-1">
        <div className="first-2">
          <div className="first-3">
            {/* this is light behind name soran aziz muhammad */}
            <span className="blur"></span>
            <span className="blur"></span>
            {/* this is light behind name soran aziz muhammad */}
            <h1>
              Soran Aziz Muhammad,
              <br /> Programmer And Designer
            </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
              tempore ea ab nihil error voluptas ut, dolorem molestiae sit odio
              assumenda eaque, repellat, dolor distinctio lorem consequuntur est
              perferendis hic iure eos natus consectetur incidunt accusamus
              sapiente porro. Officia,
            </p>
            <button className="btn-1">Hier Now</button>
            <a href="#" target="blank">
              <button className="btn-2">Github</button>
            </a>
          </div>
        </div>
        <img className="img-1" src={img2} />
      </div>
      <br />
      <br />
      {/* bashe peshawa zher navbar */}
      {/* bashe peshawa zher navbar */}
      {/* ----------------------------------- */}
      {/* ----------------------------------- */}
      {/* bashe {skill}   */}
      <div className="about--1">
        <h1 id="Skill" className="soran-1">
          Skill
        </h1>
        <hr className="hr-1" />
        <br />
        <div className="all-card">
          <div className="card">
            <img src={img3} />
            <div className="card-body">
              <h3>Adobe Photoshop</h3>
              <p>
                Adobe Photoshop offers its logo in PNG format, which can be
                downloaded for free from various sources. For instance,
                Freebiehive provides a free Adobe Photoshop
              </p>
            </div>
          </div>
          <div className="card">
            <img
              style={{
                maxWidth: "180px",
                marginLeft: "3.5rem",
                marginTop: "1.5rem",
              }}
              src={img4}
            />
            <div className="card-body">
              <h3>Adobe Illustrator</h3>
              <p>
                Adobe Illustrator tools to create and customize PNG logos,
                including Adobe Illustrator and Adobe Express. You can use Adobe
                Express to design a PNG logo for your
              </p>
            </div>
          </div>
          <div className="card">
            <img src={img5} />
            <div className="card-body">
              <h3>Adobe Premiere</h3>
              <p>
                Adobe Premiere Pro logo PNGs on several websites. For instance,
                there are PNGs available on PNGWing that feature the Adobe
                Premiere Pro logo Lorem, ipsum dolor Lorem, ipsum.
              </p>
            </div>
          </div>
        </div>
        <div className="all-card-1">
          <div className="card">
            <img
              style={{ maxWidth: "150px", marginLeft: "4.5rem" }}
              src={img6}
            />
            <div className="card-body">
              <h3>Html</h3>
              <p>
                HTML, which stands for HyperText Markup Language, is the most
                basic building block of the web and defines the content and
                structure
              </p>
            </div>
          </div>
          <div className="card">
            <img style={{ maxWidth: "230px", marginLeft: "2rem" }} src={img7} />
            <div className="card-body">
              <h3>CSS</h3>
              <p>
                CSS, or Cascading Style Sheets, is a style sheet language used
                to describe the presentation and styling of a document written
              </p>
            </div>
          </div>
          <div className="card">
            <img style={{ maxWidth: "235px", marginLeft: "2rem" }} src={img8} />
            <div className="card-body">
              <h3>Java</h3>
              <p>
                The programming language Java is a high-level, general-purpose,
                memory-safe, object-oriented language designed to run on any
              </p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        {/* bashe {skill}  end  */}
        {/* ---------------- */}
        {/* bashe project start */}
        <div className="pro">
          <h1 id="Project" className="soran-2">
            My Project
          </h1>

          <div className="imgss">
            <img src={img9} />
            <img src={img10} />
            <img src={img11} />
            <img src={img12} />
            <img src={img13} />
            <img src={img14} />
            <img src={img15} />
            <img src={img16} />
            <img src={img17} />
            <img src={img18} />
            <img src={img19} />
            <img src={img20} />
          </div>

          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
      {/* bashe project end */}
      {/* ---------------- */}
      {/* ---------------- */}
      {/* bashe Contact start  */}
      <div className="con-1">
        <h1 id="Contact" className="soran-1">
          Contact US
        </h1>
        <hr style={{ width: "15rem" }} className="hr-2" />

        <div className="for-1">
          <img src={img21} />
          <div className="for-2">
            <div className="for-3">
              <form>
                <input type="name" placeholder="First Name" />
                <input type="name" placeholder="Last Name" />
                <br />
                <input type="Number" placeholder="Phone" />
                <input type="email" placeholder="E-mail" />
                <br />
                <textarea cols={54} rows={10} placeholder="Write Herer" />
                <br />
                <input className="sub" type="submit" placeholder="Send" />
              </form>
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      {/* bashe Contact end */}
      {/* ---------------- */}
      {/* ---------------- */}
      {/* bashe kwtae start */}

      <div className="foo">
        <footer>
          <a href="#">Home</a>
          <a href="#Skill">Skill</a>
          <a href="#Project">Project</a>
          <a href="#Contact">Contact</a>

          <a
            href="https://www.instagram.com/graphic_desgner_/"
            target="blank"
            style={{ fontSize: "22px" }}
          >
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://www.youtube.com/@soranaziz-ov7ji"
            target="blank"
            style={{ fontSize: "22px" }}
          >
            <i class="fa-brands fa-youtube"></i>
          </a>
          <a
            href="https://www.tiktok.com/@graphicdesigner163?_t=ZS-8uu2ClSkNoW"
            target="blank"
            style={{ fontSize: "22px" }}
          >
            <i class="fa-brands fa-tiktok"></i>
          </a>
        </footer>
        {/* bashe kwtae end*/}
        {/* ---------------- */}
      </div>
    </div>
  );
};

export default Nav1;
