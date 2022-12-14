import { mockAuthentication } from "../../../domain/test/mock-authentication";
import { HttpPostClientSpy } from "../../test/mock-http-client";
import { RemoteAuthentication } from "./remote-authentication";
import { faker }  from "@faker-js/faker";
import { InvalidCredentialsError} from "../../../domain/errors/invalid-credentials-error"
import { HttpStatusCode } from "../../protocols/http/http-response";
import { UnexpectedError } from "../../../domain/errors/unexpected-error";
import { AuthenticationParams } from "../../../domain/usecases/authentication";
import { AccountModel } from "../../../domain/models/account-models";

type SutTypes = {
    sut: RemoteAuthentication,
    httpPostClientSpy: HttpPostClientSpy<AuthenticationParams, AccountModel>
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
    const httpPostClientSpy = new HttpPostClientSpy<AuthenticationParams, AccountModel>()
    const sut = new RemoteAuthentication(url, httpPostClientSpy)
    return {
        sut,
        httpPostClientSpy
    }
}

describe('RemoteAuthentication', () => {
    test('Should call HttpPostClient with corret URL', async () => {
        const url = faker.internet.url();
        const {sut, httpPostClientSpy} = makeSut(url);
        await sut.auth(mockAuthentication())
        expect(httpPostClientSpy.url).toBe(url)
    })

    test('Should call HttpPostClient with corret URL', async () => {
        const {sut, httpPostClientSpy} = makeSut();
        const authenticationParams = mockAuthentication();
        await sut.auth(authenticationParams)
        expect(httpPostClientSpy.body).toEqual(authenticationParams)
    })

    test('Should throw invalidCredentialsError if HttpPostClient returns 401', async () => {
        const {sut, httpPostClientSpy} = makeSut();
        httpPostClientSpy.response = {
            statusCode: HttpStatusCode.unathorized
        }
        const promise = sut.auth(mockAuthentication())
        await expect(promise).rejects.toThrow(new InvalidCredentialsError())
    })

    test('Should throw UnexpectedError if HttpPostClient returns 400', async () => {
        const {sut, httpPostClientSpy} = makeSut();
        httpPostClientSpy.response = {
            statusCode: HttpStatusCode.badRequest
        }
        const promise = sut.auth(mockAuthentication())
        await expect(promise).rejects.toThrow(new UnexpectedError())
    })

    test('Should throw UnexpectedError if HttpPostClient returns 404', async () => {
        const {sut, httpPostClientSpy} = makeSut();
        httpPostClientSpy.response = {
            statusCode: HttpStatusCode.notFound
        }
        const promise = sut.auth(mockAuthentication())
        await expect(promise).rejects.toThrow(new UnexpectedError())
    })

    test('Should throw UnexpectedError if HttpPostClient returns 500', async () => {
        const {sut, httpPostClientSpy} = makeSut();
        httpPostClientSpy.response = {
            statusCode: HttpStatusCode.serverError
        }
        const promise = sut.auth(mockAuthentication())
        await expect(promise).rejects.toThrow(new UnexpectedError())
    })

})


