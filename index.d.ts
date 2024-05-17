import { CreateStackInput, UpdateStackInput } from 'aws-sdk/clients/cloudformation';

type Callback = (error: Error | string, success: boolean) => void

type Params = {
  Parameters: Record<string, string>
}
type Tags = {
  Tags: Record<string, string>
}

type CloudformerCreateInput = Partial<Omit<CreateStackInput, 'Parameters', 'Tags'>> & Params & Tags;
type CloudformerUpdateInput = Partial<Omit<UpdateStackInput, 'Parameters', 'Tags'>> & Params & Tags;

export default class Stack {
  constructor(stackName);

  apply(template: string, options: CloudformerCreateInput | CloudformerUpdateInput, callback: Callback): void ;
  delete(callback: Callback): void
  outputs(callback: Callback): void
  update(template: string, options: CloudformerUpdateInput, callback: Callback): void
  create(template: string, options: CloudformerCreateInput, callback: Callback): void
  waitUntilEnd(callback: Callback): void
  isDeployed(callback: Callback): void
  isValidTemplate(template: string, callback: Callback)
  isDeploySuccessful(callback: Callback): void
}
