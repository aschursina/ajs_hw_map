import ErrorRepository from "../class/ErrorRepository";

const newErrorRepo = new ErrorRepository();

test('test unknown code', () => {
    const result = newErrorRepo.translate(666);
    
    expect(result).toEqual('Unknown error')
});

test('test exist code', () => {
    const result = newErrorRepo.translate(401);

    expect(result).toEqual('Unauthorized')
})