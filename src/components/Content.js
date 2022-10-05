import React from "react";

function Content() {
  return (
    <div>
      <section class="">
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-90 "
                align="center"
                src="Images/home1.jfif"
                alt="First slide"
                style={{ height: "auto" }}
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-90 "
                align="center"
                src="Images/home2.jfif"
                alt="Second slide"
                style={{ height: "200px" }}
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-90"
                src="Images/home3.webp"
                alt="Third slide"
                style={{ height: "auto" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section class="bg-light" id="about">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12">
              <h3 class="text-center mt-4 text-secondary">
                Sections of Medicine
              </h3>
            </div>
          </div>
          <div class="row">
            <p class="mt-4 mb-5">
              There are many sections of medicine. To get proper diagnosis and
              treatment one should always consult with specific section of
              medicine. If anyone can not find there specific section then he
              can consult with general physician.
            </p>
          </div>
        </div>
      </section>

      <section class="" id="destinations">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12">
              <h3 class="text-center mt-4 text-secondary">
                Medicine subsection
              </h3>
            </div>
          </div>

          <div class="container">
            <div class="row">
              <div class="col align-self-start">
                <div class="card mt-4">
                  <img class="card-img-top" src="Images/1.jfif" alt="" />
                  <div class="card-body">
                    <h4 class="card-title text-dark">Neurologist</h4>
                    <p class="card-text text-secondary">
                      Treat your disease of brain and spinal cord,peripheral
                      nerves and muscles, neurological conditions including
                      epilepsy,stroke,multiple sclerosis.
                    </p>
                  </div>
                  <div class="card-footer text-center">
                    <a href="#" class="btn btn-dark">
                      Consult with us
                    </a>
                  </div>
                  {/* </div> */}
                </div>
              </div>
              {/* <div class="container-component"> */}
              <div class="col align-self-center">
                <div class="card mt-4">
                  <img class="card-img-top" src="Images/2.jpeg" alt="" />
                  <div class="card-body">
                    <h4 class="card-title text-dark"> Dentist</h4>
                    <p class="card-text text-secondary">
                      Dentistry is the diagnosis, treatment, and prevention of
                      conditions, disorders, and diseases of the teeth, gums,
                      mouth, and jaw.
                    </p>
                  </div>
                  <div class="card-footer text-center">
                    <a href="#" class="btn btn-dark ">
                      Consult with us
                    </a>
                  </div>
                  {/* </div> */}
                </div>
              </div>
              {/* <div class="container-component"> */}
              <div class="col align-self-end">
                <div class="card mt-4">
                  <img class="card-img-top" src="Images/3.webp" alt="" />
                  <div class="card-body">
                    <h4 class="card-title text-dark">Physiotherapists</h4>
                    <p class="card-text text-secondary">
                      Physiotherapists help people affected by injury, illness
                      or disability through movement and exercise, manual
                      therapy, education and advice.
                    </p>
                  </div>
                  <div class="card-footer text-center">
                    <a href="#" class="btn btn-dark">
                      Consult with us
                    </a>
                  </div>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4 mb-5">
              <div class="card mt-4">
                <img class="card-img-top" src="Images/4.jpg" alt="" />
                <div class="card-body">
                  <h4 class="card-title text-dark"> Surgeon</h4>
                  <p class="card-text text-secondary">
                    trained to diagnose and manage a wide range of diseases and
                    disorders that may require surgical treatment.
                  </p>
                </div>
                <div class="card-footer text-center">
                  <a href="#" class="btn btn-dark">
                    Consult with us
                  </a>
                </div>
                {/* </div> */}
              </div>
            </div>
            <div class="col-sm-4 mb-5">
              <div class="card mt-4">
                <img class="card-img-top" src="Images/5.webp" alt="" />
                <div class="card-body">
                  <h4 class="card-title text-dark"> Orthopedist</h4>
                  <p class="card-text text-secondary">
                    Broken bones, compression fractures, stress fractures,
                    dislocations, muscle injury, and tendon tears or ruptures
                    are common reasons to visit
                  </p>
                </div>
                <div class="card-footer text-center">
                  <a href="#" class="btn btn-dark">
                    Consult with us
                  </a>
                </div>
                {/* </div> */}
              </div>
            </div>
            <div class="col-sm-4 mb-5">
              <div class="card mt-4">
                <img class="card-img-top" src="Images/6.jpg" alt="" />
                <div class="card-body">
                  <h4 class="card-title text-dark"> pediatrician</h4>
                  <p class="card-text text-secondary">
                    pediatricians specialize in children and have more in-depth
                    knowledge about the growth, development, and behavior of
                    small kids.
                  </p>
                </div>
                <div class="card-footer text-center">
                  <a href="#" class="btn btn-dark">
                    Consult with us
                  </a>
                </div>
                {/* </div> */}
              </div>
            </div>
            <div class="col-sm-4 mb-5">
              <div class="card mt-4">
                <img class="card-img-top" src="Images/7.jpg" alt="" />
                <div class="card-body">
                  <h4 class="card-title text-dark"> General physician</h4>
                  <p class="card-text text-secondary">
                    Check up for any sickness you don't know. A general
                    physician will refer to any specialist later on.
                  </p>
                </div>
                <div class="card-footer text-center">
                  <a href="#" class="btn btn-dark">
                    Consult with us
                  </a>
                </div>
                {/* </div> */}
              </div>
            </div>
            <div class="col-sm-4 mb-5">
              <div class="card mt-4">
                <img class="card-img-top" src="Images/8.jpg" alt="" />
                <div class="card-body">
                  <h4 class="card-title text-dark"> Gastroentrologist</h4>
                  <p class="card-text text-secondary">
                    Consult if you have diseases of the esophagus, stomach,
                    small intestine, colon and rectum, pancreas, gallbladder,
                    bile ducts and liver.
                  </p>
                </div>
                <div class="card-footer text-center">
                  <a href="#" class="btn btn-dark">
                    Consult with us
                  </a>
                </div>
                {/* </div> */}
              </div>
            </div>
            <div class="col-sm-4 mb-5">
              <div class="card mt-4">
                <img class="card-img-top" src="Images/9.webp" alt="" />
                <div class="card-body">
                  <h4 class="card-title text-dark"> Dietitian</h4>
                  <p class="card-text text-secondary">
                    Support you to improve their health by providing expert
                    nutrition and dietary advice.
                  </p>
                </div>
                <div class="card-footer text-center">
                  <a href="#" class="btn btn-dark">
                    Consult with us
                  </a>
                </div>
                {/* </div> */}
              </div>
            </div>
            <div class="col-sm-4 mb-5">
              <div class="card mt-4">
                <img class="card-img-top" src="Images/10.jpg" alt="" />
                <div class="card-body">
                  <h4 class="card-title text-dark"> E.N.T</h4>
                  <p class="card-text text-secondary">
                    Skilled doctor of eye,nose,throat are here to diagnose any
                    disease of problem.
                  </p>
                </div>
                <div class="card-footer text-center">
                  <a href="#" class="btn btn-dark">
                    Consult with us
                  </a>
                </div>
                {/* </div> */}
              </div>
            </div>
            <div class="col-sm-4 mb-5">
              <div class="card mt-4">
                <img class="card-img-top" src="Images/11.jpg" alt="" />
                <div class="card-body">
                  <h4 class="card-title text-dark"> Dermatologist</h4>
                  <p class="card-text text-secondary">
                    Support you to improve your skin and treat any skin related
                    disease or infection.
                  </p>
                </div>
                <div class="card-footer text-center">
                  <a href="#" class="btn btn-dark">
                    Consult with us
                  </a>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section class="" id="places">
        <div class="container">
          <div class="col-sm-12 col-md-12 mb-4">
            <h3 class="text-center text-secondary mt-4">
              Places and Description
            </h3>
          </div>
          <div class="accordion" id="accordionExample">
            <div class="card">
              <div class="card-header" id="headingOne">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Tourist Places
                  </button>
                </h2>
              </div>

              <div
                id="collapseOne"
                class="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingTwo">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Best Destination
                  </button>
                </h2>
              </div>
              <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingThree">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Best Heritages
                  </button>
                </h2>
              </div>
              <div
                id="collapseThree"
                class="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section class="bg-light mt-5" id="tourist">
        <div class="container">
          <div class="row text-center">
            <div class="col-sm-12 col-md-12 mb-4">
              <h3 class="text-center mt-4 text-secondary">
                MESSAGE of OFFICIALS
              </h3>
            </div>
            <div class="col-md-4">
              <div class="testimonial mb-5">
                <div class="avatar mx-auto">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
                    class="rounded-circle z-depth-1 img-fluid"
                  />
                </div>
                <h4 class="font-weight-bold dark-grey-text mt-4">
                  Anna Deynah
                </h4>
                <h6 class="font-weight-bold blue-text my-3">DEAN</h6>
                <p class="font-weight-normal dark-grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  eos id officiis hic tenetur quae quaerat ad velit ab hic
                  tenetur.
                </p>
              </div>
            </div>

            <div class="col-md-4">
              <div class="testimonial mb-5">
                <div class="avatar mx-auto">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(15).jpg"
                    class="rounded-circle z-depth-1 img-fluid"
                  />
                </div>
                <h4 class="font-weight-bold dark-grey-text mt-4">John Doe</h4>
                <h6 class="font-weight-bold blue-text my-3">Professor</h6>
                <p class="font-weight-normal dark-grey-text">
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam, nisi ut aliquid commodi.
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="testimonial mb-5">
                <div class="avatar mx-auto">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(11).jpg"
                    class="rounded-circle z-depth-1 img-fluid"
                  />
                </div>
                <h4 class="font-weight-bold dark-grey-text mt-4">Maria Kate</h4>
                <h6 class="font-weight-bold blue-text my-3">Chief Surgeon</h6>
                <p class="font-weight-normal dark-grey-text">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Content;
