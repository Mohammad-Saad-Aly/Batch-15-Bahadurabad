// let user : any = [20,"20"]

// generics
// function check(a: string | number | number[]): string | number | number[] {
//     return a
// }
// let getValue = check([10, 20])

function check<T>(a: T): T {
  return a;
}
let getValue = check("");
let getValue2 = check(10);
let getValue3 = check(["abc", 10]);
let getValue4 = check({});

interface Student<T> {
  user: string;
  age: number;
  data: T;
}

let student: Student<number | string | { name: String; age: number }> = {
  user: "Ali",
  age: 20,
  data: {
    name: "Ali huzaifa",
    age: 20,
  },
};

console.log(student);

enum userOrders {
  pending = "pending",
  Accepted = "accepted",
  Rejected = "rejected",
}

const orders: { staus: string; orderId: string }[] = [
  {
    staus: userOrders.pending, // pending,
    orderId: "AC-01",
  },
  {
    staus: userOrders.Accepted, // Accepted,
    orderId: "AC-02",
  },
  {
    staus: userOrders.Rejected, // Rejected,
    orderId: "AC-03",
  },
];

console.log(orders);

// let user = "ABCD"
// user = 20
