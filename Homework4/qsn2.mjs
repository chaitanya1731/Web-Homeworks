const data = {
  rubricCategories: {
    hw: { title: 'Homework', },
    prj: { title: 'Project', },
    quiz: { title: 'Quiz', },
    exam: { title: 'Exam', }
  },
  rubrics: {
    hw4: {
      title: 'Homework 4',
      category: 'hw',
      dateAssigned: '2020-04-28',
      dateDue: '2020-05-05',
    },
    prj4: {
      title: 'Project 4',
      category: 'prj',
      dateAssigned: '2020-04-21',
      dateDue: '2020-05-05',
    },
  },
  students: {
    'b123456': {
      name: 'John Doe',
      class: 'senior',
    },
    'b234567': {
      name: 'Mary Doe',
      class: 'graduate',
    },
  },
  grades: {
    hw4: {
      b123456: { points: 92, },
      b234567: { points: 87, },
    },
    prj4: {
      b123456: { points: 97, },
      b234567: { points: 90, },
    },
  },
};
const datamodel = {
  studentName: data.students.b123456.name,
  studentID: 'b123456',
  grades:{
    rubricCategories: {
      hw: {
        id: data.rubrics.hw4.category,
        grade: data.grades.hw4.b123456.points,
        average: 'Calculate the average by iterating through points of that rubric category',
      },
      prj: {
        id: data.rubrics.prj4.category,
        grade: data.grades.prj4.b123456.points,
        average: 'Calculate the average by iterating through points of that rubric category',
      },
    },
  },
  average: 'Calculated by iterating through all the points in all the rubric category',
  rank: 'Determined using the overall grade assigned to that student',
};


app.get(`/test`, test(app, datamodel));

function test(app, datamodel){
  return async function(req, res){
    try{
      const html = doMustache(app, 'temp', datamodel);
      res.send(html);
      //return res.json(datamodel);
    }
    catch (e) {
      console.log(e)
    }

  }
}