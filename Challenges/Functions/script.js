/**
 * Defining the course class
 * title = the title of the course.
 * platform = the platform on which we can find the course, such as LinkedIn Learning.
 * rating =  the rating of the course, out of 5.
 * duration = duration in minutes.
 * price = the pricing of the course in DA.
 */
class Course {
  constructor(title, platform, duration, rating, price) {
    this.title = title;
    this.platform = platform;
    this.duration = duration;
    this.rating = rating;
    this.price = price;
  }

  getTitle() {
    return this.title;
  }

  setTitle(title) {
    this.title = title;
  }

  getPlatform() {
    return this.platform;
  }

  setPlatform(platform) {
    this.platform = platform;
  }

  getPrice() {
    return this.price;
  }

  setPrice(price) {
    this.price = price;
  }

  getRating() {
    return this.rating;
  }

  setRating(rating) {
    this.rating = rating;
  }

  getDuration() {
    return this.duration;
  }

  setDuration(duration) {
    this.duration = duration;
  }
}

/**
 * Defining the Instructor class
 */

class Instructor {
  constructor(firstName, lastName, domaine) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.domaine = domaine;
  }
  // Setters
  setFirstName = (firstName) => {
    this.firstName = firstName;
  };
  setLastName = (lastName) => {
    this.lastName = lastName;
  };
  setDomaine = (domaine) => {
    this.domaine = domaine;
  };
  // Getters
  getFirstName = () => {
    return this.firstName;
  };
  getLastName = () => {
    return this.lastName;
  };
  getDomaine = () => {
    return this.domaine;
  };
}

/**
 * Creating two objects
 */

const myCourse = new Course(
  "JavaScrip Essentials",
  "LinkedIn Learning",
  327,
  5,
  0
);

const myInstructor = new Instructor(
  "Morten",
  "Rand-Hendriksen",
  "Software Engineering"
);

console.log(myInstructor.firstName);

/**
 * Function declaration
 */

function AddCourse(course) {
  return `<ul id="course">
        <li><span>Title :</span> ${course.title}</li>
        <li><span>Platform :</span> ${course.platform}</li>
        <li><span>Duration :</span> ${course.duration} min</li>
        <li><span>Price :</span> ${course.price} DA</li>
        <li><span>Rating :</span> ${course.rating} out of 5</li>
    </ul>`;
}

function AddInstructor(instructor) {
  return `<ul id="instructor">
        <li><span>First Name :</span>  ${instructor.firstName}</li>
        <li><span>Last Name :</span> ${instructor.lastName}</li>
        <li><span>Domaine of expertise :</span> ${instructor.domaine}</li>
    </ul>`;
}

const courseContainer = document.createElement("div");
courseContainer.innerHTML = AddCourse(myCourse);
document.body.append(courseContainer);

const instructorContainer = document.createElement("span");
instructorContainer.innerHTML = AddInstructor(myInstructor);
document.body.append(instructorContainer);
