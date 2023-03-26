export interface RootObject {
    contractWorkers: ContractWorker[]
    serviceContracts: ServiceContract[]
    workerContractMappings: WorkerContractMapping[]
}

export interface ContractWorker {
    id: number
    firstName: string
    lastName: string
    role: string
    startDate: string
    email: string
    employeeNumber: string
}

export interface ServiceContract {
    id: number
    contractNumber: string
    status: string
    ownerId: number
    ownerName: string
}

export interface WorkerContractMapping {
    id: number
    employeeNumber: string
    contractNumber: string
    allocation: number
}  