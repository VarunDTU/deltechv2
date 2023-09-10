const Campus = () => {
  return (
    <section
      className="text-slate-900 bg-transparent leading-relaxed"
      id="home"
    >
      <div className="md:flex md:flex-row items-center md:h-screen px-5">
        <div>
          <h1 className="text-5xl md:py-10 py-20 md:text-7xl font-bold">
            DelTech MUN Campus Ambassador Programme
          </h1>
        </div>
        <div className="md:w-screen -z-10 w-80 md:py-10">
          <img className="h-1/4" src="/img/campusStu.jpg"></img>
        </div>
      </div>
      <div className="pt-5 bg-slate-300 rounded-t-3xl px-5" id="aboutus">
        <h2 className="text-3xl pb-5">About the Programme</h2>
        <div className="md:flex md:flex-row items-center w-full">
          <p className="w-full">
            <h2 className="font-semibold">
              Have you ever wondered how does delegation works at the
              fundamental level?<br></br>
              Do you know how do diplomats at UN leave a lasting impression?
              <br></br>Do you ever wish to be a part of an organisation, be at
              the centre stage organising a MUN?
            </h2>
            <br></br>
            <b>
              Well calm down and become an ambassador!<br></br>
            </b>
            <br></br>
            North India’s No.1 ranked MUN the DelTech Model United Nations
            (DelTech MUN) is looking for Campus Ambassadors who can represent
            DelTech MUN at your respective School/ Institute. As a Campus
            Ambassador the selected students will assist and support DelTech MUN
            & DebSoc, DTU to inspire young minds who can redefine the debating
            and MUNing landscape. Interested students can apply through this
            form.
          </p>

          <div className="md:w-screen w-80 px-5 pl-10">
            <img className="" src="/img/aboutcampus.png"></img>
          </div>
        </div>
      </div>

      <div className="pt-5 px-5 md:pr-72" id="Responsibilities">
        <h2 className="text-3xl py-5">Who can Apply? </h2>
        <div className="md:flex md:flex-row items-center w-full">
          <h3>
            A student currently reading in High School/First Year of any
            School/Institute can apply.
          </h3>
        </div>
        <h2 className="text-3xl py-5">Campus Ambassador Role: </h2>
        <div className="md:flex md:flex-row items-center w-full">
          <h3>
            Official ambassador and representative of DelTech in your
            school/institute | Promote the DelTech's vision of Model United
            Nations awareness in your school/institute through participation in
            DelTech MUN and various info sessions | Coordinate the execution of
            activities in your school/institute.
          </h3>
        </div>
        <div>
          <p>
            <br></br>
            <h2 className="text-3xl py-2">
              Being an ambassador comes with benefits:
            </h2>
            <br />• Top 1% Campus ambassadors will be gifted Official DelTech
            MUN Hoodie/Varsity Jacket *<br></br>• Goodies and DelTech kit worth
            2.5k
            <br></br>• Official DelTech MUN Certificate
            <br></br>• DelTech Model United Nations 2023- Flagship Event (worth
            1.5k)
            <br></br>• Chance to meet the Chief Guest of DelTech MUN 2023.
            <br></br>• Attractive concessions & discounts on events from DelTech
            Team.
            <br></br>• Visit DTU Campus during the flagship event. <br></br>
            <p1 className="text-sm">
              (*subject to satisfactory,performance as evaluated by the
              Directors of DelTech MUN & DebSoc)
            </p1>
          </p>
        </div>
      </div>
      <div className="justify-center items-center w-full py-10 flex">
        <a href="https://forms.gle/KdMctqbH2dCU6mE26">
          <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Start you application
          </button>
        </a>
      </div>
    </section>
  );
};

export default Campus;
