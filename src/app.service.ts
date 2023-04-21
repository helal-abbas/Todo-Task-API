import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
const path = "src/mock-data.json"
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async readData() {
    let mockData = fs.readFileSync(path, 'utf8');
    console.log(mockData);
    return mockData
  }

  async createData(data){
    let mockData = fs.readFileSync(path, 'utf8');
    // if(mockData) 
    console.log("mock",mockData)
    let json = mockData ? JSON.parse(mockData) : [];
    console.log(json.length);
    console.log("On leave",json?.[json.length-1]?.id + 1)
    data = {
      ...data,
      id: json[json.length-1] ? json[json.length-1].id + 1 : 1
    }
  
    
    json.push(data);
    const credentialsStringify = JSON.stringify(json, null, 2);
    fs.writeFileSync(path, credentialsStringify);
    return credentialsStringify
  }


  async editData(body) {
    console.log(body)
    let mockData = fs.readFileSync(path, 'utf8');
    let json = JSON.parse(mockData);

    for(let i=0; i < json.length;i++) {
      if(body.id === json[i].id) {
        console.log(json[i].title)
        json[i].title = body.title;
        json[i].body = body.body;
      }
    }
    const credentialsStringify = JSON.stringify(json, null, 2);
    fs.writeFileSync(path, credentialsStringify);
    return credentialsStringify
  }


  async deleteData(id) {
    
    let mockData = fs.readFileSync(path, 'utf8');
    let json = JSON.parse(mockData);

    const filter = json.filter((ele) => {
      if(ele.id !== id){
        return ele;
      } 
    })
    
    const credentialsStringify = JSON.stringify(filter, null, 2);
    fs.writeFileSync(path, credentialsStringify);
    return credentialsStringify
    
  }
}
