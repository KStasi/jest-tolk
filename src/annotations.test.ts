import { extractAnnotationsFromDocBlock } from './annotations';

describe('extractAnnotationsFromDocBlock()', () => {
  it('extracts @exitCode', () => {
    expect(
      extractAnnotationsFromDocBlock('// @exitCode 3010 (an ignored comment)'),
    ).toEqual({
      exitCode: 3010,
    });
  });

  it('extracts @scope', () => {
    expect(extractAnnotationsFromDocBlock('// @scope myCustomScope')).toEqual({
      scope: 'myCustomScope',
    });
  });

  it('extracts @balance', () => {
    expect(extractAnnotationsFromDocBlock('// @balance 20000000')).toEqual({
      balance: 20000000n,
    });
  });

  it('extracts @gasLimit', () => {
    expect(extractAnnotationsFromDocBlock('// @gasLimit 50000')).toEqual({
      gasLimit: 50000,
    });
  });

  it('extracts @unixTime', () => {
    expect(extractAnnotationsFromDocBlock('// @unixTime 1735231203')).toEqual({
      unixTime: 1735231203,
    });
  });

  it('extracts @test', () => {
    expect(extractAnnotationsFromDocBlock('// @test')).toEqual({
      test: true,
    });
  });

  it('extracts @skip', () => {
    expect(extractAnnotationsFromDocBlock('// @skip')).toEqual({
      skip: true,
    });
  });

  it('extracts @todo', () => {
    expect(extractAnnotationsFromDocBlock('// @todo')).toEqual({
      todo: true,
    });
  });

  it('extracts @runs', () => {
    expect(extractAnnotationsFromDocBlock('// @runs 100')).toEqual({
      runs: 100,
    });
  });

  it('extracts @fuzz', () => {
    expect(extractAnnotationsFromDocBlock('// @fuzz')).toEqual({
      fuzz: true,
    });
  });

  it('extracts @fuzz with a tlb', () => {
    expect(extractAnnotationsFromDocBlock('// @fuzz tlb')).toEqual({
      fuzz: true,
      fuzzTlb: 'tlb',
    });
  });
});
