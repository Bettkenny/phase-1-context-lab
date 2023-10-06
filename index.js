/* Your Code Here */
function createEmployeeRecord(row){
    return {
        firstName: row[0],
        familyName: row[1],
        title: row[2],
        payPerHour: row[3],
        timeInEvents: [],
        timeOutEvents: [],
    }

}
const createEmployeeRecords = (row)=>{
   return row.map(createEmployeeRecord); 
}
function createTimeInEvent(timeStamp){
this.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(timeStamp.split(" ")[1],10),
    date: timeStamp.split("")[0],
});
return this;
}
function createTimeOutEvent(timeInStamp){
    this.timeOutEvents.push({
       type: "TimeOut",
       hour: parseInt.split(timeStamp.split(" ")[2],10),
       date: timeStamp.split("")[0] 
    })
    return this;
}
function hoursWorkedOnDate(dateAndHours){
    const timeIn = this.timeInEvents.find(timeStamp => timeStamp.date === dateAndHours).hour
    const timeOut = this.timeOutEvents.find(timeStamp => timeStamp.date === dateAndHours).hour
    const totalHours = (timeOut - timeIn)
    return totalHours / 100
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

