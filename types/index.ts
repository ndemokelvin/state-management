export type Student = {
  /**
   * @property should be unique
   */
  firstName: string;
  lastName: string;
  age: number;
  grade: number;
  location: "Nairobi" | "Mombasa" | "Thika";
};
