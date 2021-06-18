const messages = [];

module.exports = {
    getCompliment:(req, res) => {
        const compliments = ["Gee, you're a smart cookie!",
                           "Cool shirt!",
                           "Your Javascript skills are stellar.",
        ];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
        
      },
    getFortune: (req, res) => {
        const fortunes = ["You Will Pass This Test",
                      "Your Future Is Very Bright",
                      "Be Open To Opportunity",
                      "Adventure can be real happiness",
                      "Believe it can be done"
          ]
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune)
      },
    getActivity: (req, res) => {
        const activities = ["Ride A Bike",
                      "Go Swimming",
                      "Write A Poem",
                      "Update Online Profile Pictures",
                      "Draw A Picture"
          ]
        let randomIndex = Math.floor(Math.random() * activities.length);
        let randomActivity = activities[randomIndex];
      
        res.status(200).send(randomActivity)
      },
    createMessage: (req, res) => {
        console.log(req.body);

        const message = req.body;

        messages.push(message);

        res.status[200].send(messages);
    }
}