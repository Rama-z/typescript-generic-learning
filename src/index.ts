interface Identity {
  name: string;
  surname: string;
  age: number;
  isAdmin: boolean;
}

type Permission = "admin" | "user" | "developer";

interface IdentityWithPermissions extends Identity {
  permissions: Permission[];
}

// this question mark can satisfy both of them above
interface IdentityWithQuestionMark {
  name: string;
  surname: string;
  age: number;
  isAdmin: boolean;
  permissions?: Permission[];
}

const user: Identity = {
  age: 1,
  isAdmin: true,
  name: "zanuar",
  surname: "bagus",
};

const basicUser: IdentityWithPermissions = {
  name: "zanuar",
  surname: "bagus",
  age: 20,
  isAdmin: true,
  permissions: ["admin", "user", "developer"],
};

// Generics
type BasicUserWithGeneric<T = boolean, P = string[]> = {
  name: string;
  surname: string;
  age: number;
  isAdmin: T;
  permissions?: P;
};

const basicUserWithGeneric: BasicUserWithGeneric<boolean, Permission[]> = {
  name: "zanuar",
  surname: "bagus",
  age: 20,
  isAdmin: true,
  permissions: ["admin", "user", "developer"],
};

const basicUserArray: Identity[] = [basicUser, basicUserWithGeneric, user];
const basicUserArray2: IdentityWithPermissions[] = [basicUser];

function getFirstUser<T>(arr: T[]): T {
  return arr[0];
}

getFirstUser<Identity>(basicUserArray);
getFirstUser<IdentityWithPermissions>(basicUserArray2);

// Utility Types
type ReadonlyBasicUser = Readonly<BasicUserWithGeneric>;
type RequiredBasicUser = Required<BasicUserWithGeneric>;
type PartialBasicUser = Partial<BasicUserWithGeneric>;
type ReadonlyRequiredBasicUser = Required<Readonly<BasicUserWithGeneric>>;

interface DepartmentForPermission {
  depName: string;
  lvl: number;
}

const deptForPerm: Partial<Record<Permission, DepartmentForPermission>> = {
  admin: {
    depName: "Product",
    lvl: 10,
  },
};

type BasicUserWithoutPermission = Omit<
  BasicUserWithGeneric,
  "permissions" | "isAdmin"
>;

type PermissionsWithoutAdmin = Exclude<Permission, "admin">;

function checkTypeFunction(props: BasicUserWithGeneric) {
  return props;
}

type checkTypeFunctionReturnType = ReturnType<typeof checkTypeFunction>;

type Trial<BasicUserWithGeneric> = {
  name: BasicUserWithGeneric;
};

type Person = {
  name: string;
  surname: string;
  isOnline: boolean;
  permissions: number[];
};

type FixMePersonWithNonRequired = Partial<Person>;

type PartiallyPersonWithBoolPermissions = {
  name: string;
  surname?: string;
  isOnline?: boolean;
  permissions?: boolean[];
};

// type FixMePartiallyPersonWithBoolPermissions = Record<>;

type YourBusiness = {
  name: string;
  age: number;
};

type MyBusiness<T extends Permission> = {
  types: T;
};

const myBusiness: MyBusiness<Permission> = {
  types: "developer",
};

function genericFunction<T>(arr: T[]): T {
  return arr[0];
}

type TupleArray = number | string | boolean;

const stringArray: string[] = ["Chair", "Table", "Computer"];
const numberArray: number[] = [1, 2, 3, 4, 5];
const randomArray: TupleArray[] = [1, "Mouse", true];
const genericVariable1 = genericFunction<string>(stringArray);
const genericVariable2 = genericFunction<number>(numberArray);
const genericVariable3 = genericFunction<TupleArray>(randomArray);

interface SimpleInterface {
  name: string;
  age: number;
}

interface InterfaceWithGeneric<T> extends SimpleInterface {
  gender: string;
  isAlive: boolean;
  preference: T;
}

const interfaceImplementation: InterfaceWithGeneric<boolean> = {
  name: "Me",
  age: 12,
  gender: "Men",
  isAlive: true,
  preference: true,
};

type FirstType = {
  name: string;
  age: number;
};

type SecondType = {
  gender: string;
  isAlive: boolean;
} & FirstType;

const ImplementationOfType: SecondType = {
  name: "Me",
  age: 12,
  gender: "Male",
  isAlive: true,
};

type SimpleType = {
  name: string;
  age: number;
};

type TypeWithGeneric<T = string> = {
  gender: T;
  isAlive: boolean;
} & SimpleType;

const otherPeople: TypeWithGeneric = {
  name: "Women",
  age: 12,
  gender: "Female",
  isAlive: true,
};

const people: TypeWithGeneric<number> = {
  name: "Men",
  age: 10,
  gender: 12,
  isAlive: true,
};
