import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';

import "./Bus.css"
import bus from '..//Buses.json';
import { stateContext } from '../../Context/StateContext';


//function 
const Bus = () => {

  const { state, dispatch } = useContext(stateContext)

  const [search] = useSearchParams();
  // const getFrom=search[0].get('from');
  const from = search.get('from');
  const to = search.get('to');
  var date = search.get('onBoard');
  // setJourneyDate(date)
  var userBus = bus.filter((e) => {
    if (e.from.toLowerCase() == from && e.to.toLowerCase() == to) {
      return e
    }
  })
  var date1 = parseInt(date.slice(8));

  var a = parseInt(date.slice(5, 7))

  var b = parseInt(date.slice(0, 4))
  var [busDate, setBusDate] = useState();
  var [busMonth, setBusMonth] = useState()
  var array = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]


  useEffect(() => {
    if (a == 1 || a == 3 || a == 5 || a == 7 || a == 8 || a == 10) {
      if (date1 == 31) {
        var x = 1
        var y = array[a]
      } else {
        var x = date1 + 1
        var y = array[a - 1]
      }
    }
    else if (a == 12) {
      if (date1 == 31) {
        var x = 1
        var y = array[0]
      } else {
        var x = date1 + 1
        var y = array[a - 1]

      }
    } else if (a == 4 || a == 6 || a == 9 || a == 11) {
      if (date1 == 30) {
        var x = 1
        var y = array[a]
      } else {
        var x = date1 + 1
        var y = array[a - 1]
      }
    }
    else if (a == 2) {

      if (b % 4 == 0 && b % 100 != 0 || b % 100 == 0 && b % 400 == 0) {
        if (date1 == 29) {
          var x = 1
          var y = array[a]
        } else {
          var x = date1 + 1
          var y = array[a - 1]
        }
      }

      else {
        if (date1 == 28) {
          var x = 1
          var y = array[a]
        } else {
          var x = date1 + 1
          var y = array[a - 1]
        }
      }
    }
    setBusDate(x);
    setBusMonth(y);

  }, [])


  const [dummy, setDummy] = useState(userBus)

  const letter = ["L", "U"];
  const num = ["1", "0", "2", '3'];
  const num1 = ["4", "5", "0", '6'];
  const num2 = ["7", "0", "8", '9'];
  const num3 = ["10", "11", "0", '12'];
  const num4 = ["13", "0", "14", '15'];
  const num5 = ["16", "17", "0", '18'];
  const [flag, setFlag] = useState(false);
  // =========================deleted 0 th seats====================
  useEffect(() => {
    let unWanted = document.querySelectorAll(".seats")
    unWanted.forEach((e) => {
      if (e.innerHTML == 'L0' || e.innerHTML == 'U0') {
        e.classList.add("hide")
      }
    })

  }, [flag])


  // ============================view seat ===========================
  const ShowSeats = (e) => {
    setFlag(!flag)
    let parent = e.currentTarget.parentNode.parentNode;
    let current = parent.querySelector(".bus_seats")

    if (current.classList.contains("bus_seats_show")) {
      current.classList.remove("bus_seats_show");
      current.classList.add("bus_seats_hide")
    }
    else {
      current.classList.remove("bus_seats_hide");
      current.classList.add("bus_seats_show")
    }
  }


  // ==========================seat selection  and un selec ..gray ungray...seat_count...seat_name=================
  const [selectedSeats, setSelectedSeats] = useState([])
  const [userSelect, setUserSelect] = useState(0);
  const [counter, setCounter] = useState(0);
  const [fare, setFare] = useState(0)
  const [amount, setAmount] = useState(0);
  const [value, setValue] = useState(0);

  // const [flag,setFlag]=useState()

  const SeatSelection = (d) => {
    if (d.currentTarget.classList.contains("seats")) {
      let parent = d.currentTarget.parentNode.parentNode;
      let id = parent.getAttribute("id");
      setUserSelect(id)
      let data_id = parent.getAttribute("data-id");
      let all = document.getElementById(data_id)

      let counts = all.querySelectorAll(".gray")
      let count = counts.length
      setCounter(count)
      let fares = d.currentTarget.getAttribute("data-val")
      setFare(fares)
      // console.log(count);
      setValue(data_id)
      if (count < 6 && !d.currentTarget.classList.contains('gray')) {
        let seatNum = d.currentTarget.innerHTML
        setSelectedSeats([...selectedSeats, seatNum])
        d.currentTarget.classList.add('gray')
      }
      else if (d.currentTarget.classList.contains('gray')) {
        let seatDelNum = d.currentTarget.innerHTML
        let index = selectedSeats.indexOf(seatDelNum)
        if (index > -1) {
          selectedSeats.splice(index, 1)
        }
        console.log(selectedSeats);
        d.currentTarget.classList.remove('gray')
      }
      else {
        alert("!!!...you can select six seats only")
      }
    }
  }



  // =============================-=========boardind & depature open and close==========================
  const counterFun = (d) => {

    let big_parent = document.getElementById(value)
    console.log(big_parent);
    var rightTab = big_parent.querySelector(".tabss")
    let grays = big_parent.querySelectorAll(".gray")

    console.log(rightTab);
    console.log(grays.length);

    if (grays.length >= 1) {
      rightTab.classList.remove("close");
      rightTab.classList.add("opens")
    }
    else if (0 == grays.length) {
      rightTab.classList.add("close")
      rightTab.classList.remove("opens");
      setUserSelect(0)
      setValue(0)
    }






    setAmount(fare * selectedSeats.length)

  }

  useEffect(counterFun, [counter, userSelect, selectedSeats])
  //  ================ ============taps fun individual==========================
  const TapsRender = (e) => {
    let parent = e.currentTarget.parentNode
    let parents = e.currentTarget.parentNode.parentNode
    let active = parent.querySelector(".active")
    let rout = parents.querySelectorAll(".open")
    if (e.currentTarget !== active) {
      active.classList.remove("active");
      e.currentTarget.classList.add("active")
      rout.forEach((t) => {
        if (t.classList.contains("opens")) {
          t.classList.remove("opens")
          t.classList.add("close")
        }
        else if (t.classList.contains("close")) {
          t.classList.remove("close")
          t.classList.add("opens")
        }
      })
    }


  }
  // ====================================go to depature page====================
  const GoToSecond = (e) => {
    let parent = e.currentTarget
    // let parents = e.currentTarget.parentNode.parentNode
    let data = parent.getAttribute("data-id")
    let all = document.getElementById(data)
    let tabs = document.querySelectorAll(".tabs")
    let rout = all.querySelectorAll(".open")
    tabs.forEach((e) => {
      if (e.classList.contains("active")) {
        e.classList.remove("active")
        // t.classList.add("active")
      } else {
        e.classList.add("active")
      }
    })
    rout.forEach((t) => {
      if (t.classList.contains("opens")) {
        t.classList.remove("opens")
        t.classList.add("close")
      }
      else if (t.classList.contains("close")) {
        t.classList.remove("close")
        t.classList.add("opens")
      }
    })
  }

  const GoToPay = () => {
    let big_parent = document.getElementById(value)
    let rightTab = big_parent.querySelector(".tabss")
    let payment = big_parent.querySelector(".payment_slide")
    if (rightTab.classList.contains("opens")) {
      rightTab.classList.remove("opens");
      rightTab.classList.add("close")
      payment.classList.remove("close");
      payment.classList.add("opens")
    }
    else {
      rightTab.classList.remove("close");
      rightTab.classList.add("opens")
      payment.classList.remove("opens");
      payment.classList.add("close")
    }
    dispatch({ type: "confirmId", payload: userSelect });
    dispatch({ type: "confirmSeats", payload: selectedSeats });
    dispatch({ type: "confirmDate", payload: date });

  }
  // =======================================input value fun===========================
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const [stTime, setStTime] = useState();
  const [endTime, setEndTime] = useState();
  const StoreInfo = (r) => {
    if (r.currentTarget.name == "board") {
      setStart(r.currentTarget.value)
      let choose = r.currentTarget.getAttribute("data_start_point")
      let time = document.querySelectorAll(`[data_start_time]`)
      time.forEach((e) => {
        if (e.getAttribute("data_start_time") == choose) {
          setStTime(e.innerHTML)
        }
      })
    }
    else if (r.currentTarget.name == "drop") {
      setEnd(r.currentTarget.value)
      let choose = r.currentTarget.getAttribute("data_drop_id")
      let time = document.querySelectorAll(`[data_end_time]`)
      time.forEach((e) => {
        if (e.getAttribute("data_end_time") == choose) {
          setEndTime(e.innerHTML)
        }
      })
    }

  }

  // =============================filter=======================
  const [checkValue, setCheckValue] = useState([]);
  const HandleChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setCheckValue(pre => [...pre, value])
    }
    else {
      setCheckValue(pre => {
        return [...pre.filter(skill => skill !== value)]
      })
    }
  }

  const [checkSpec, setCheckSpec] = useState([]);
  const [userCount, setUserCount] = useState(0)
  const HandleChanges = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setCheckSpec(pre => [...pre, value])
      setUserCount(userCount + 1)
    }
    else {
      setCheckSpec(pre => {
        return [...pre.filter(skill => skill !== value)]
      })
      setUserCount(userCount - 1)
    }

  }
  // console.log(checkSpec);
  // console.log(checkSpec.length);
  // console.log(userCount);

  useEffect(() => {

    if (checkValue.length == 0 && checkSpec.length == 0) {
      setDummy(userBus)
      //  setDum(bus)
    } if (checkValue.length >= 1) {
      // let str=checkValue.toString()
      // alert()
      let newBus = userBus.filter((a) => {
        let user = a.typ.split(' ')
        for (let i = 0; i < checkValue.length; i++) {
          for (let j = 0; j < user.length; j++) {
            if (checkValue[i] == user[j].toLowerCase()) {
              // alert()
              return a
            }
            // break
          }
          // break
        }
        // console.log(user);
      })

      // console.log(newBus);
      setDummy(newBus)
      // setDum(newBus)

    } if (checkSpec.length >= 1) {
      let newBuses = dummy.filter((a) => {
        let users = a.typ.split(' ')
        if (userCount == 1) {
          var ival = 0
        } else if (userCount > 1) {
          ival = userCount - 1
        }
        for (let i = ival; i < checkSpec.length; i++) {
          for (let j = 0; j < users.length; j++) {
            if (checkSpec[i] == users[j].toLowerCase()) {
              // alert()
              return a
            }
            // break
          }
          // break
        }
        // console.log(user);
      })
      setDummy(newBuses)
    }
  }, [checkValue, checkSpec])



  const Navi = useNavigate()
  //proceed to book button

  const handleSubmit = (e) => {
    e.preventDefault();
    var options = {
      key: "rzp_test_eFpQHC32wuysem",
      key_secret: "4e5SE0jAqNcKvndKoGEgjzJe",
      amount: amount * 100,
      currency: "INR",
      name: "BUS_TICKET_BOOKING",
      description: "for testing purpose",
      handler: function (response) {
        alert(response.razorpay_payment_id)
        localStorage.setItem("id", state.usersId)
        console.log(state.usersSeat);
        // let string =JSON.string(state.usersSeat)
        localStorage.setItem("seats", state.usersSeats)
        localStorage.setItem("date", state.usersDate)
        Navi(`/react-redbus`)
      },
      prefil: {
        name: "Anto",
        email: "antoanstin@gmail.com",
        contact: "9789703270"
      },
      notes: {
        address: "Razorpay Corporate office",
        color: "#3399cc"
      }
    };
    var pay = new window.Razorpay(options);
    pay.open();
  }


  // console.log(document.querySelectorAll(".seats"));


  function Disable() {
    // alert("1")
    if (localStorage.getItem("id")) {
      // alert("2")
      let array = localStorage.getItem("seats")
      // let array=JSON.parse(retString)    
      let arrays = array.split(',')

      // console.log(arrays);
      let id = localStorage.getItem("id")
      let date = localStorage.getItem("date")

      arrays.map((e) => {

        if (state.selectedDate == date) {
          // alert("3")
          let seats = document.querySelectorAll(".seats")
          seats.forEach((y) => {
            // console.log(y.getAttribute("data-conformId"));
            if (id == y.getAttribute("data-conformId") && e == y.innerHTML) {
              // alert("4")
              y.style.backgroundColor = "gray"
              y.classList.remove("seats")
            }
          })
        }
      })
    }
  }
  useEffect(Disable, [])
  const HandNavi = () => {
    Navi("/react-redbus")
  }
  return (

    <div>

        


      <div className='route col-12'>
        <span className='ww'>Home</span>{` > Bus Tickets> ${from} To ${to}>`}
        <p>Fare Starts from INR 400</p>
      </div>
      <div className="helloo col-12">
        <div className=" roder col-12 d-flex flex-wrap">
          <span className="from">{from}
          <i class="bi bi-arrow-right"></i>
          </span>
          
          <span className="from">{to} 
          <i class="bi bi-chevron-left"></i>
          </span>
          
          <span className="from conDate">{date}</span>
          <i class="bi bi-chevron-right"></i>
          <button onClick={HandNavi}>Modify</button>
        </div>
      </div>


      <div class="accordion" id="accordionExample">
 
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      FILTERS
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">

      <div className='col-lg-2 col-12 d-flex flex-wrap  '>
            {/* <div className="filter col-12 py-2 border-bottom head_size">FILTERS</div> */}

            <div className=" col-lg-12 col-md-3 col-6 arrival py-1 border-bottom">
              <h6 className='head_size'>BUS TYPE</h6>
              <input type="checkbox" id="vehicle6" name="seater" onChange={HandleChange} value="seater" />
              <label className='ms-2 size' for="vehicle6">SEATER</label><br />
              <input type="checkbox" id="vehicle7" name="sleeper" onChange={HandleChange} value="sleeper" />
              <label className='ms-2 size' for="vehicle7">SLEEPER</label><br />
              <input type="checkbox" id="vehicle8" name="ac" onChange={HandleChange} value="ac" />
              <label className='ms-2 size' for="vehicle8"> AC</label><br />
              <input type="checkbox" id="vehicle9" name="nonac" onChange={HandleChange} value="nonac" />
              <label className='ms-2 size' for="vehicle9"> NONAC</label><br></br>
            </div>
            <div className=" col-lg-12 col-md-3 col-6 arrival py-1 border-bottom">
              <h6 className='head_size'>AMENITIES</h6>
              <input type="checkbox" id="veh1" name="wifi" onChange={HandleChanges} value="wifi" />
              <label className='ms-2 size' for="veh1"><i class="bi bi-wifi me-2"></i>WIFI</label><br />
              <input type="checkbox" id="veh2" name="Water" onChange={HandleChanges} value="water" />
              <label className='ms-2 size' for="veh2"><i class="ri-drop-line me-2"></i>Water Bottle</label><br />
              <input type="checkbox" id="veh3" name="Blankets" onChange={HandleChanges} value="blankets" />
              <label className='ms-2 size' for="veh3"><i class="bi bi-collection me-2"></i>Blankets</label><br />
              <input type="checkbox" id="veh4" name="Charging" onChange={HandleChanges} value="charging" />
              <label className='ms-2 size' for="veh4"><i class="bi bi-plug-fill me-2"></i>Charging Point</label><br />
              <input type="checkbox" id="veh5" name="Movie" onChange={HandleChanges} value="movie" />
              <label className='ms-2 size' for="veh5"><i class="bi bi-film me-2"></i>Movie</label><br />
              <input type="checkbox" id="veh6" name="Emergency" onChange={HandleChanges} value="emergency" />
              <label className='ms-2 size' for="veh6"><i class="bi bi-telephone me-2"></i>Emergency Contact </label><br />
            </div>

            <div className="depature col-lg-12 col-md-3 col-6 py-1 border-bottom">
              <h6 className='head_size'>DEPATURE TIME</h6>
              <input type="checkbox" id="vehicle1" name="vehicle1" value="6am-12pm" />
              <label className='ms-2 size' for="vehicle1"> 6am-12pm</label><br />
              <input type="checkbox" id="vehicle2" name="vehicle2" value="after 6pm" />
              <label className='ms-2 size' for="vehicle2"> After 6pm</label><br></br>
            </div>
            <div className=" col-lg-12 col-md-3 col-6 arrival py-1 border-bottom">
              <h6 className='head_size'>ARRIVAL TIME</h6>
              <input type="checkbox" id="vehicle3" name="vehicle3" value="before 6am" />
              <label className='ms-2 size' for="vehicle3"> Before 6am</label><br />
              <input type="checkbox" id="vehicle4" name="vehicle4" value="6am-12pm" />
              <label className='ms-2 size' for="vehicle3"> 6am-12pm</label><br />
              <input type="checkbox" id="vehicle5" name="vehicle5" value="after 6pm" />
              <label className='ms-2 size' for="vehicle5"> After 6pm</label><br></br>
            </div>

          </div>

      </div>
    </div>
  </div>
</div>


      <div className="container-fluid">


        <div className='row  align-items-start '>
          <div className='col-lg-2 col-12 d-flex flex-wrap filterpos '>
            <div className="filter col-12 py-2 border-bottom head_size">FILTERS</div>

            <div className=" col-lg-12 col-md-3 col-6 arrival py-1 border-bottom">
              <h6 className='head_size'>BUS TYPE</h6>
              <input type="checkbox" id="vehicle6" name="seater" onChange={HandleChange} value="seater" />
              <label className='ms-2 size' for="vehicle6">SEATER</label><br />
              <input type="checkbox" id="vehicle7" name="sleeper" onChange={HandleChange} value="sleeper" />
              <label className='ms-2 size' for="vehicle7">SLEEPER</label><br />
              <input type="checkbox" id="vehicle8" name="ac" onChange={HandleChange} value="ac" />
              <label className='ms-2 size' for="vehicle8"> AC</label><br />
              <input type="checkbox" id="vehicle9" name="nonac" onChange={HandleChange} value="nonac" />
              <label className='ms-2 size' for="vehicle9"> NONAC</label><br></br>
            </div>
            <div className=" col-lg-12 col-md-3 col-6 arrival py-1 border-bottom">
              <h6 className='head_size'>AMENITIES</h6>
              <input type="checkbox" id="veh1" name="wifi" onChange={HandleChanges} value="wifi" />
              <label className='ms-2 size' for="veh1"><i class="bi bi-wifi me-2"></i>WIFI</label><br />
              <input type="checkbox" id="veh2" name="Water" onChange={HandleChanges} value="water" />
              <label className='ms-2 size' for="veh2"><i class="ri-drop-line me-2"></i>Water Bottle</label><br />
              <input type="checkbox" id="veh3" name="Blankets" onChange={HandleChanges} value="blankets" />
              <label className='ms-2 size' for="veh3"><i class="bi bi-collection me-2"></i>Blankets</label><br />
              <input type="checkbox" id="veh4" name="Charging" onChange={HandleChanges} value="charging" />
              <label className='ms-2 size' for="veh4"><i class="bi bi-plug-fill me-2"></i>Charging Point</label><br />
              <input type="checkbox" id="veh5" name="Movie" onChange={HandleChanges} value="movie" />
              <label className='ms-2 size' for="veh5"><i class="bi bi-film me-2"></i>Movie</label><br />
              <input type="checkbox" id="veh6" name="Emergency" onChange={HandleChanges} value="emergency" />
              <label className='ms-2 size' for="veh6"><i class="bi bi-telephone me-2"></i>Emergency Contact </label><br />
            </div>

            <div className="depature col-lg-12 col-md-3 col-6 py-1 border-bottom">
              <h6 className='head_size'>DEPATURE TIME</h6>
              <input type="checkbox" id="vehicle1" name="vehicle1" value="6am-12pm" />
              <label className='ms-2 size' for="vehicle1"> 6am-12pm</label><br />
              <input type="checkbox" id="vehicle2" name="vehicle2" value="after 6pm" />
              <label className='ms-2 size' for="vehicle2"> After 6pm</label><br></br>
            </div>
            <div className=" col-lg-12 col-md-3 col-6 arrival py-1 border-bottom">
              <h6 className='head_size'>ARRIVAL TIME</h6>
              <input type="checkbox" id="vehicle3" name="vehicle3" value="before 6am" />
              <label className='ms-2 size' for="vehicle3"> Before 6am</label><br />
              <input type="checkbox" id="vehicle4" name="vehicle4" value="6am-12pm" />
              <label className='ms-2 size' for="vehicle3"> 6am-12pm</label><br />
              <input type="checkbox" id="vehicle5" name="vehicle5" value="after 6pm" />
              <label className='ms-2 size' for="vehicle5"> After 6pm</label><br></br>
            </div>

          </div>
          <div className="col-lg-10 col-12 ">

            {dummy.map((e, i) => {
              if (userSelect == 0 || e.id == userSelect) {

                return (
                  <div key={i} className='col-lg-12 d-flex flex-wrap border m-3 '>
                    <div className='list-top col-12 d-flex flex-wrap justify-content-between align-items-base-line p-2 '>
                      <div className='bus-names col-md-4 col-8'>
                        <h3 className='bus_name'>{e.bus_name}</h3>
                        <p className='bus_type my-3'>{e.type}</p>
                        <div className='icons d-flex '>
                          <span className='material-symbols-outlined'>width_full</span>
                          <span className='material-symbols-outlined'>tv</span>
                          <span className='material-symbols-outlined'>camera_video</span>
                          <span className='material-symbols-outlined'>call_end</span>
                          <span className='material-symbols-outlined'>cable</span>
                          <span className='Flexi'>Flexi Ticket</span>
                          <span className='Live'>Live Tracking</span>

                        </div>
                      </div>

                      <div className='ratings col-md-1 col-2'>
                        <div className='ratingss d-flex align-items-center'> <span className='rating_icon material-symbols-outlined'>local_police</span>
                          <span className='rating_no'>{e.ratings}</span></div>
                        <div className='ratings_person d-flex align-items-center'><span className=' rating_icon_person material-symbols-outlined'>groups</span><span className='rating_person_count'>{e.rating_person}</span></div>

                      </div>

                      <div className='departure col-md-1 bord col-4'>
                        <p className='departurep1'>{e.departure}</p>
                        <p className='departurep2'>{e.from}</p>
                      </div>

                      <div className='duration col-md-2 bord col-4'>
                        <p>{e.duration}</p>

                      </div>

                      <div className='arrival col-md-2 bord col-4'>
                        <p className='arival_time'>{e.arrival}</p>
                        <p className='arival_date'>{busDate}-{busMonth}</p>
                        <p className='arrival_place'>{e.to}</p>
                      </div>



                      <div className='Fare col-md-1 col-6'>
                        <p className='starts'>Starts from</p>
                        <p><span className='inr'>INR</span> {e.Fare}</p>
                      </div>

                      <div className='Seats_Available col-md-1 col-6'>
                        <p>{e.Seats_Available}</p>
                      </div>


                    </div>
                    <div className='col-md-12 col-12 text-end'>
                      <button className='view_btn px-2' onClick={ShowSeats}>view seats</button>
                    </div>
                    <div className='list-btm col-md-12 col-12'>

                      <div className='col-md-12 col-12 bus_seats_hide mt-2 bus_seats'>
                        <div id={i} className="col-md-12 col-12 d-flex flex-wrap">
                          <div className='col-md-7 col-12 d-flex p-lg-5 p-2 flex-column gap-5'>

                            {letter.map((l, j) => {
                              if (l == "L" || l == "U") {

                                return (

                                  <div className='col-md-10 col-12  m-auto  d-flex flex-wrap'>
                                    <div className='col-md-10 col-12  m-auto'> {l}seats</div>
                                    <div data-id={i} id={e.id} className='col-md-10 col-12  m-auto bg-light d-flex p-3 flex-wrap'>
                                      <div className='d-flex flex-column-reverse col-2 gap-2'>
                                        {num.map((z) => {
                                          return (
                                            <div onClick={SeatSelection} data-val={e.Fare} data-conformId={e.id} className='col-10 m-auto seats border'>{l}{z}</div>
                                          )
                                        })}
                                      </div>
                                      <div className='d-flex flex-column col-2 gap-2 '>
                                        {num1.map((z) => {
                                          return (
                                            <div onClick={SeatSelection} data-val={e.Fare} data-conformId={e.id} className='col-10 m-auto seats border'>{l}{z}</div>
                                          )
                                        })}
                                      </div>

                                      <div className='d-flex flex-column-reverse col-2 gap-2'>
                                        {num2.map((z) => {
                                          return (
                                            <div onClick={SeatSelection} data-val={e.Fare} data-conformId={e.id} className='col-10 m-auto seats border'>{l}{z}</div>
                                          )
                                        })}
                                      </div>
                                      <div className='d-flex flex-column col-2 gap-2'>
                                        {num3.map((z) => {
                                          return (
                                            <div onClick={SeatSelection} data-val={e.Fare} data-conformId={e.id} className='col-10 m-auto seats border'>{l}{z}</div>
                                          )
                                        })}
                                      </div>

                                      <div className='d-flex flex-column-reverse col-2 gap-2'>
                                        {num4.map((z) => {
                                          return (
                                            <div onClick={SeatSelection} data-val={e.Fare} data-conformId={e.id} className='col-10 m-auto seats border'>{l}{z}</div>
                                          )
                                        })}
                                      </div>
                                      <div className='d-flex flex-column col-2 gap-2 '>
                                        {num5.map((z) => {
                                          return (
                                            <div onClick={SeatSelection} data-val={e.Fare} data-conformId={e.id} className='col-10 m-auto seats border'>{l}{z}</div>
                                          )
                                        })}
                                      </div>

                                    </div>

                                  </div>
                                )

                              }

                            })}

                          </div>

                          <div className='col-md-5 col-12 position-relative d-flex justify-content-center'>
                            <div className="col-md-12 col-12  first_slide">
                              <h3 className='col-8 m-auto aeat_legent my-4'>SEAT LEGEND</h3>
                              <div className="col-8 m-auto d-flex justify-content-between">
                                <div className="col-6 d-flex gap-2">
                                  <div className=" hu available border  bg-light"></div>
                                  <span className='avai'>Available</span>
                                </div>
                                <div className="col-6 d-flex gap-2">
                                  <div className=" hu un_available gap-3 legend border"></div>
                                  <span className='avai'>Unavailable</span>
                                </div>
                              </div>
                            </div>


                            {/* ====================== tabs ========================= */}

                            <div className="col-11 m-auto tabss position-absolute second_slide bg-light close">
                              <div className="col-12 m-auto  d-flex gap-2">
                                <div className="col-6 tabs active" onClick={TapsRender}>BOARDING POINT</div>
                                <div className="col-6 tabs " onClick={TapsRender}>DROPPING POINT</div>
                              </div>
                              <div className="col-12 routs">
                                <div>
                                  <div className='opens open '>
                                    <div className="d-flex gap-5  mt-3">
                                      <div>
                                        {e.depa && e.depa.map((d, j) => {
                                          return (
                                            <div className='d-flex gap-3 mt-3 align-items-center '>
                                              <input data-id={i} data_start_point={j} type="radio" onChange={StoreInfo} onClick={GoToSecond} className='boarding' id={d} value={d} name="board" />
                                              <label htmlFor={d}>{d}</label>
                                            </div>
                                          )
                                        })}
                                      </div>

                                      <div>
                                        {e.start && e.start.map((d, j) => {
                                          return (
                                            <div data_start_time={j} className='mt-3'>
                                              {d}
                                            </div>
                                          )
                                        })}
                                      </div>
                                    </div>
                                  </div>
                                  <div className='close open'>
                                    <div className="d-flex gap-5 mt-3">
                                      <div>{e.drop && e.drop.map((d, j) => {
                                        return (
                                          <div className='d-flex gap-3 mt-3  align-items-center'>
                                            <input data_drop_id={j} type="radio" id={d} className='boarding' value={d} name="drop" onClick={GoToPay} onChange={StoreInfo} />
                                            <label htmlFor={d}>{d}</label>
                                          </div>
                                        )
                                      })}
                                      </div>

                                      <div>
                                        {e.end && e.end.map((d, j) => {
                                          return (
                                            <div data_end_time={j} className='mt-3  gap-5'>
                                              {d}
                                            </div>
                                          )
                                        })}

                                      </div>
                                    </div>

                                  </div>
                                </div>
                              </div>
                              <div className='col-12 amount_property border-top'>
                                <div className=' d-flex justify-content-around py-3 tax_property'>
                                  <div>
                                    <span className='amount'>Amount<span className='tax'>( Taxes will be calculated during payment )</span></span>
                                  </div>
                                  <span><span className='inrr'>INR</span> {e.Fare}</span>
                                </div>
                              </div>
                            </div>

                            <div className="col-11 position-absolute payment_slide close bg-light p-4">
                              <div className="drop_board border-bottom ">
                                <div className="head d-flex justify-content-between">
                                  <h6>Boarding & Dropping</h6>
                                  <a className="change" onClick={GoToPay}>CHANGE</a>
                                </div>

                                <div className="frompay d-flex justify-content-between py-2">
                                  <span>{start} </span>
                                  <span>{stTime}</span>
                                </div>
                                <div className="topay d-flex justify-content-between py-3">
                                  <span>{end} </span>
                                  <span>{endTime}</span>
                                </div>
                              </div>
                              <div className="seatnum d-flex justify-content-between py-3">
                                <div className="seat py-2"><h6>seat No.</h6></div>
                                <div className="num d-flex gap-2 py-2">{selectedSeats.map((g, k) => {
                                  return (
                                    <div id={k}>{g}</div>
                                  )
                                })}</div>
                              </div>
                              <div className="fare border-top py-3">
                                <div className="deatails"> <h6>Fare Deatails</h6></div>
                                <div className="tax_amount d-flex justify-content-between py-2">
                                  <span>Amount</span>
                                  <span>{amount}</span>
                                </div>
                                <span className='py-2'>Taxes will be calculated during payment</span>
                                <div className="booking  py-2">
                                  <button className='book-btn w-100 bg-danger border-0 py-1 text-light' onClick={handleSubmit}>PROCEED TO BOOK</button>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>)
              }
            })
            }
          </div>
        </div>
      </div>
    </div>



  )
}

export default Bus