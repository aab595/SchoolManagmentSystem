const noteSchema = new mongoose.Schema(
    {
        value: {
            type: number
        },
        
    }
);


module.exports = mongoose.model('Note', noteSchema);