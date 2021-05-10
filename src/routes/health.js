import controllers from '../controllers'; 

export default [
  {
    version: 'v1',
    path: 'healthz',
    method: 'get',
    action: controllers.health.find
  }
];