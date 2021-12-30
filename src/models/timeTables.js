const mongoose = require('mongoose');

const TimeTableSchema = new Schema({
    subject: { type: String },
    startTime: { type: Date },
    endTime: { type: Date },
    classroom: { type: String },
    semester: { type: String },
    classe: { type: String }
}, { timestamps: true });

const TimeTable = mongoose.model('timetables', TimeTableSchema);
module.exports = TimeTable
