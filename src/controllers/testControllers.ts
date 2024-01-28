import { Request, Response } from "express";

class TestController {
  ///Synchronous error handling (basic)
  index(req: Request, res: Response): void {
    try {
      res.status(200).send({
        message: "Index method in the TestController",
        success: true,
      });
    } catch (error) {
      console.log("Error in test API", error);
    }
  }

  create(req: Request, res: Response): void {
    res.status(201).send("Create method in the TestController");
  }
}

export default new TestController();

/*
async index(req: Request, res: Response): Promise<void> {
  try {
    // Asynchronous operation, e.g., fetching data from a database
    const data = await fetchDataFromDatabase();

    res.status(200).send({
      message: "Index method in the TestController",
      success: true,
      data,
    });
  } catch (error) {
    console.log("Error in test API", error);
    res.status(500).send({
      message: "Internal Server Error",
      success: false,
    });
  }
}
*/

// In this example, the fetchDataFromDatabase function is assumed to be an asynchronous operation. The try-catch block captures any errors that occur during that operation.

// Remember that it's crucial to handle errors appropriately based on the nature of your application. Logging the error is a good start, but providing a meaningful response to the client is equally important. In the catch block, you might want to send an error response to the client with a suitable status code.
