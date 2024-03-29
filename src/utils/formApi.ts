import axios from "axios";

export const getFormBlocks = async() => {
  
  //! Change this to false if you want to use axios
  //! Change this to true if you want to fetch from Blocks
  const needBlocks = true; 

  if (needBlocks) {
    return fetchFormBlocks()
} else {
  return fetchFormAxios();
}
}


export const fetchFormAxios = async () => {

//! Change this if your server is not running on port 3000
  const ServerUrl = "http://localhost:3000" 
  try{
    const response = await axios.get(`${ServerUrl}/api/v1/forms/blocks`);
    return response.data; 
  } catch(error){
    console.error("Failed to fetch from blocks", error);
    throw error;
  }
  
};


export const fetchFormBlocks = async () => {

  return Promise.resolve({

    data: {
      blocks: [
        {
          name: "welcome-screen",
          id: "jg1401r",
          attributes: {
            label: "Intake form",
            description: "This is just a test"
          }
        },
        {
          name: "short-text",
          id: "kd12edg",
          attributes: {
            layout: "split-right",
            required: true,
            label: "Let's start with your name"
          }
        },
        {
          name: "slider",
          id: "93pda11",
          attributes: {
            label: "Please choose your weight",
            min: 0,
            max: 100,
            step: 1
          }
        },
        {
          name: "number",
          id: "wer3qdkdb",
          attributes: {
            required: true,
            label: "Great, can you type your age?"
          }
        },
        {
          name: "dropdown",
          id: "3nsdf934",
          attributes: {
            choices: [
              {
                label: "Choice 1",
                value: "choice-1"
              },
              {
                label: "Choice 2",
                value: "choice-2"
              }
            ]
          }
        },
        {
          name: "long-text",
          id: "m35612edg",
          attributes: {
            required: true,
            label: "Type a brief about yourself!"
          }
        },
        {
          name: "date",
          id: "a213rsew",
          attributes: {
            required: true,
            label: "Please type your birth of date!"
          }
        },
        {
          name: "multiple-choice",
          id: "gqr1294c",
          attributes: {
            required: true,
            multiple: true,
            verticalAlign: false,
            label: "Which subjects do you love the most?",
            choices: [
              {
                label: "Physics",
                value: "physics"
              },
              {
                label: "Math",
                value: "math"
              },
              {
                label: "English",
                value: "english"
              },
              {
                label: "Biology",
                value: "biology"
              }
            ]
          }
        },
        {
          name: "statement",
          id: "g91imf1023",
          attributes: {
            label: "You are doing great so far!",
            buttonText: "Continue",
            quotationMarks: true
          }
        }

      ],
      settings: {
        animationDirection: "vertical",
        disableWheelSwiping: false,
        disableNavigationArrows: false,
        disableProgressBar: false
      },
      theme: {
        font: "Roboto",
        buttonsBgColor: "#9b51e0",
        logo: {
          src: ""
        },
        questionsColor: "#000",
        answersColor: "#0aa7c2",
        buttonsFontColor: "#fff",
        buttonsBorderRadius: 25,
        errorsFontColor: "#fff",
        errorsBgColor: "#f00",
        progressBarFillColor: "#000",
        progressBarBgColor: "#ccc"
      }
    }
  });
};


