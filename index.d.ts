import { CreateStackInput, UpdateStackInput } from 'aws-sdk/clients/cloudformation';

type Callback = (error: Error | string, success: boolean) => void

export default class Stack {
  constructor(stackName);

  apply(template: string, options: Partial<CreateStackInput> | Partial<UpdateStackInput>, callback: Callback): void ;
  delete(callback: Callback): void
  outputs(callback: Callback): void
  update(template: string, options: Partial<UpdateStackInput>, callback: Callback): void
  create(template: string, options: Partial<CreateStackInput>, callback: Callback): void
  waitUntilEnd(callback: Callback): void
  isDeployed(callback: Callback): void
  isValidTemplate(template: string, callback: Callback)
  isDeploySuccessful(callback: Callback): void
}
