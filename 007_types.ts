//Boolean
let paidAccount : boolean = false;

//Number
let age : number = 33;
var taxRate : number = 7.5;

//String
var fullName : string = "Casey Lund";

//Array
var ages : number[] = [23,42,52,11];

//Tuple
let player : [number, string, number, number];
player = [3, "Casey", .333, 31];

//Enum
enum ApprovalStatus {Approved, Pending, Rejected};
let job : ApprovalStatus = ApprovalStatus.Pending;

//Any
var apiData : any[] = [123, 'Casey', false];

//Void
function printOut(msg: string) : void {
  console.log(msg);
}