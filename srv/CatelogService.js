const cds = require('@sap/cds'); // Corrected require statement

module.exports = cds.service.impl(async function() {
    const { Student, Teacher } = this.entities

    // READ handler for Student entity
    this.on('READ', 'Student', async (req) => {
    })

    this.on("FetchDatafromVisionAI", async(req,res)=>{
    let data = req.data    
        const result = await someVisionAIService.fetch(data);
         data ={
            "Prompt" : " hi hello",
            "created_by" : "mayank" 
         }
    
        res.send(result);
        }
    )
});