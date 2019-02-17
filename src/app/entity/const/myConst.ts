import {HttpHeaders} from "@angular/common/http";

export const httpOptions = {
  headers: new HttpHeaders({
  /*  'Authorization': 'my-auth-token'*/
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMTEiLCJ1c2VyTmFtZSI6Imh6aiIsInVzZXJOYW1lMSI6Imh6aiIsImV4cCI6MTUzNTk0MzI3OH0.Y6Tl-EFKOd0c5gKH19cz4DyhRprkt5u3tXB-UlLwR1o'
  })
};
