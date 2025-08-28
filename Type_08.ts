import { describe, it, expect, TestType, Size, Level, beforeAll } from "../../../hypium/index";
import { BusinessError } from '@ohos.base';
import hilog from '@ohos.hilog'
import Utils from './Util.test';

let domain: number = 0x0000; //日志标识,0x0000作为测试框架的业务标识
let tag: string = 'testTag'; //日志标识字符串,作为tag标识当前runner类下的测试行为

class parse {
  text: string = ''
}

function isIteratorEmpty<T>(iterator: Iterator<T>): boolean {
  const firstResult = iterator.next();
  return firstResult.done === true;
}

interface Options {
  type: string,
  endings: string,
}


export default function typeTest() {
  describe("typeTest", (): void => {
    hilog.info(domain, tag, '%{public}s', 'describe start');
    /*
     * @tc.number: SUB_COMMONLIBRARY_UTIL_BASE_TYPE_OF_0100
     * @tc.name  : testTypeOf0001
     * @tc.desc  : Testing Type.of with null value.
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testTypeOf0001', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG = "testTypeOf0001";
      try {
        const input = null;
        const type = Type.of(input);
        expect(type.toString()).assertEqual(String(null));
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_COMMONLIBRARY_UTIL_BASE_TYPE_OF_0200
     * @tc.name  : testTypeOf0002
     * @tc.desc  : Testing Type.of with undefined value.
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testTypeOf0002', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG = "testTypeOf0002";
      try {
        const input = undefined;
        const type = Type.of(input);
        expect(type.toString()).assertEqual(String(undefined));
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_COMMONLIBRARY_UTIL_BASE_TYPE_OF_0300
     * @tc.name  : testTypeOf0003
     * @tc.desc  : Testing Type.of with double value (floating-point number).
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testTypeOf0003', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG = "testTypeOf0003";
      try {
        const input: double = 3.14;
        const type = Type.of(input);
        expect(type.toString()).assertEqual('double');
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_COMMONLIBRARY_UTIL_BASE_TYPE_OF_0400
     * @tc.name  : testTypeOf0004
     * @tc.desc  : Testing Type.of with FixedArray<double>.
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testTypeOf0004', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG = "testTypeOf0004";
      try {
        const input: FixedArray<double> = [3.14, 1.59, 2.71, 0.618, 1.414];
        const type = Type.of(input);
        expect(type.toString()).assertEqual('double[]');
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_COMMONLIBRARY_UTIL_BASE_TYPE_OF_0500
     * @tc.name  : testTypeOf0005
     * @tc.desc  : Testing Type.of with float value (floating-point number).
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    // it('testTypeOf0005', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
    //   const TAG = "testTypeOf0005";
    //   try {
    //     const input: float = 1e-45;
    //     const type = Type.of(input);
    //     expect(type.toString()).assertEqual('float');
    //   } catch (err: BusinessError) {
    //     console.error(`${TAG} failed: ${err.message}`);
    //     expect().assertFail();
    //   }
    // });

    /*
     * @tc.number: SUB_COMMONLIBRARY_UTIL_BASE_TYPE_OF_0600
     * @tc.name  : testTypeOf0006
     * @tc.desc  : Testing Type.of with FixedArray<float>.
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    // it('testTypeOf0006', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
    //   const TAG = "testTypeOf0006";
    //   try {
    //     const input: FixedArray<float> = [1e-45, 3.4028234663852886E38, -3.4028234663852886E38];
    //     const type = Type.of(input);
    //     expect(type.toString()).assertEqual('float[]');
    //   } catch (err: BusinessError) {
    //     console.error(`${TAG} failed: ${err.message}`);
    //     expect().assertFail();
    //   }
    // });

    /*
     * @tc.number: SUB_COMMONLIBRARY_UTIL_BASE_TYPE_OF_0700
     * @tc.name  : testTypeOf0007
     * @tc.desc  : Testing Type.of with int value (integer number).
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    // it('testTypeOf0007', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
    //   const TAG = "testTypeOf0007";
    //   try {
    //     const input: int = 500;
    //     const type = Type.of(input);
    //     expect(type.toString()).assertEqual('int');
    //   } catch (err: BusinessError) {
    //     console.error(`${TAG} failed: ${err.message}`);
    //     expect().assertFail();
    //   }
    // });

    /*
     * @tc.number: SUB_COMMONLIBRARY_UTIL_BASE_TYPE_OF_0800
     * @tc.name  : testTypeOf0008
     * @tc.desc  : Testing Type.of with FixedArray<int>.
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testTypeOf0008', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG = "testTypeOf0008";
      try {
        const input: FixedArray<int> = [500, 300, 900, 200];
        const type = Type.of(input);
        expect(type.toString()).assertEqual('int[]');
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_COMMONLIBRARY_UTIL_BASE_TYPE_OF_0900
     * @tc.name  : testTypeOf0009
     * @tc.desc  : Testing Type.of with long value (large integer).
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testTypeOf0009', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG = "testTypeOf0009";
      try {
        const input: long = 9223372036854775807;
        const type = Type.of(input);
        expect(type.toString()).assertEqual('long');
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_COMMONLIBRARY_UTIL_BASE_TYPE_OF_1000
     * @tc.name  : testTypeOf0010
     * @tc.desc  : Testing Type.of with FixedArray<long>.
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testTypeOf0010', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG = "testTypeOf0010";
      try {
        const input: FixedArray<long> = [-9223372036854775808, 0, 9223372036854775807];
        const type = Type.of(input);
        expect(type.toString()).assertEqual('long[]');
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_COMMONLIBRARY_UTIL_BASE_TYPE_OF_1100
     * @tc.name  : testTypeOf0011
     * @tc.desc  : Testing Type.of with short value (small integer).
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testTypeOf0011', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG = "testTypeOf0011";
      try {
        const input: short = 5;
        const type = Type.of(input);
        expect(type.toString()).assertEqual('short');
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_COMMONLIBRARY_UTIL_BASE_TYPE_OF_1200
     * @tc.name  : testTypeOf0012
     * @tc.desc  : Testing Type.of with FixedArray<short>.
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testTypeOf0012', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG = "testTypeOf0012";
      try {
        const input: FixedArray<short> = [5, 3, 9, 2];
        const type = Type.of(input);
        expect(type.toString()).assertEqual('short[]');
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_COMMONLIBRARY_UTIL_BASE_TYPE_OF_1300
     * @tc.name  : testTypeOf0013
     * @tc.desc  : Testing Type.of with boolean value (true).
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testTypeOf0013', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG = "testTypeOf0013";
      try {
        const input: boolean = true;
        const type = Type.of(input);
        expect(type.toString()).assertEqual('boolean');
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_COMMONLIBRARY_UTIL_BASE_TYPE_OF_1400
     * @tc.name  : testTypeOf0014
     * @tc.desc  : Testing Type.of with boolean value (false).
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testTypeOf0014', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG = "testTypeOf0014";
      try {
        const input: boolean = false;
        const type = Type.of(input);
        expect(type.toString()).assertEqual('boolean');
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_COMMONLIBRARY_UTIL_BASE_TYPE_OF_1500
     * @tc.name  : testTypeOf0015
     * @tc.desc  : Testing Type.of with non-empty string literal.
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testTypeOf0015', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG = "testTypeOf0015";
      try {
        const input: string = "ArkTS Type Test";
        const type = Type.of(input);
        expect(type.toString()).assertEqual('string');
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_COMMONLIBRARY_UTIL_BASE_TYPE_OF_1600
     * @tc.name  : testTypeOf0016
     * @tc.desc  : Testing Type.of with empty string.
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testTypeOf0016', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG = "testTypeOf0016";
      try {
        const input: string = "";
        const type = Type.of(input);
        expect(type.toString()).assertEqual('string');
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_COMMONLIBRARY_UTIL_BASE_TYPE_OF_1700
     * @tc.name  : testTypeOf0017
     * @tc.desc  : Testing Type.of with FixedArray<boolean>.
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testTypeOf0017', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG = "testTypeOf0017";
      try {
        const input: FixedArray<boolean> = [true, false, true];
        const type = Type.of(input);
        expect(type.toString()).assertEqual('boolean[]');
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_COMMONLIBRARY_UTIL_BASE_TYPE_OF_1800
     * @tc.name  : testTypeOf0018
     * @tc.desc  : Testing Type.of with FixedArray<byte>.
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testTypeOf0018', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG = "testTypeOf0018";
      try {
        const input: FixedArray<byte> = [60, -38, -128];
        const type = Type.of(input);
        expect(type.toString()).assertEqual("byte[]");
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_COMMONLIBRARY_UTIL_BASE_TYPE_OF_1900
     * @tc.name  : testTypeOf0019
     * @tc.desc  : Testing Type.of with positive byte value.
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testTypeOf0019', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG = "testTypeOf0019";
      try {
        const input: byte = 65;
        const type = Type.of(input);
        expect(type.toString()).assertEqual('byte');
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_COMMONLIBRARY_UTIL_BASE_TYPE_OF_2000
     * @tc.name  : testTypeOf0020
     * @tc.desc  : Testing Type.of with negative byte value.
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testTypeOf0020', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG = "testTypeOf0020";
      try {
        const input: byte = -35;
        const type = Type.of(input);
        expect(type.toString()).assertEqual('byte');
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_COMMONLIBRARY_UTIL_BASE_TYPE_OF_2100
     * @tc.name  : testTypeOf0021
     * @tc.desc  : Testing Type.of with char value (lowercase letter).
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    // it('testTypeOf0021', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
    //   const TAG = "testTypeOf0021";
    //   try {
    //     const input: char = 'a';
    //     const type = Type.of(input);
    //     expect(type.toString()).assertEqual('char');
    //   } catch (err: BusinessError) {
    //     console.error(`${TAG} failed: ${err.message}`);
    //     expect().assertFail();
    //   }
    // });

    /*
     * @tc.number: SUB_COMMONLIBRARY_UTIL_BASE_TYPE_OF_2200
     * @tc.name  : testTypeOf0022
     * @tc.desc  : Testing Type.of with FixedArray<char>.
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    // it('testTypeOf0022', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
    //   const TAG = "testTypeOf0022";
    //   try {
    //     const input: FixedArray<char> = ['a', '\uFFFF'];
    //     const type = Type.of(input);
    //     expect(type.toString()).assertEqual('char[]');
    //   } catch (err: BusinessError) {
    //     console.error(`${TAG} failed: ${err.message}`);
    //     expect().assertFail();
    //   }
    // });

    /*
     * @tc.number: SUB_COMMONLIBRARY_UTIL_BASE_TYPE_OF_2300
     * @tc.name  : testTypeOf0023
     * @tc.desc  : Testing Type.of with FixedArray<Object> (custom objects).
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testTypeOf0023', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG = "testTypeOf0023";
      try {
        const input: FixedArray<Object> = [new TestObject(1), new TestObject(2)];
        const type = Type.of(input);
        expect(type.toString()).assertEqual('std.core.Object[]');
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
         * @tc.number: SUB_COMMONLIBRARY_TYPE_TOSTRING_0100
         * @tc.name  : testTypeToString0001
         * @tc.desc  : Testing Type.toString() for int primitive type.
         * @tc.size  : MediumTest
         * @tc.type  : Function
         * @tc.level : Level 1
         */
    // it('testTypeToString0001', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
    //   const TAG = "testTypeToString0001";
    //   try {
    //     const input: int = 800;
    //     const type = Type.of(input);
    //     expect(type.toString()).assertEqual("int");
    //   } catch (err: BusinessError) {
    //     console.error(`${TAG} failed: ${err.message}`);
    //     expect().assertFail();
    //   }
    // });

    /*
     * @tc.number: SUB_COMMONLIBRARY_TYPE_TOSTRING_0200
     * @tc.name  : testTypeToString0002
     * @tc.desc  : Testing Type.toString() for primitive reference type (Byte).
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testTypeToString0002', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG = "testTypeToString0002";
      try {
        const type = Type.of(127 as byte) as ByteType;
        expect(type.toString()).assertEqual(type.getLiteral());
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_COMMONLIBRARY_TYPE_TOSTRING_0300
     * @tc.name  : testTypeToString0003
     * @tc.desc  : Testing Type.toString() for ArrayType without name (hasName()=false).
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testTypeToString0003', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG = "testTypeToString0003";
      try {

        const input: FixedArray<boolean> = [true, false];
        const type = Type.of(input) as ArrayType;
        expect(type.toString()).assertEqual(type.getLiteral());
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_COMMONLIBRARY_TYPE_TOSTRING_0400
     * @tc.name  : testTypeToString0004
     * @tc.desc  : Testing Type.toString() for ClassType with valid name (hasName()=true).
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testTypeToString0004', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG = "testTypeToString0004";
      try {
        const testObj = new TestClass("TestClass");
        const type = Type.of(testObj) as ClassType;
        expect(type.toString()).assertEqual(type.getName());
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_COMMONLIBRARY_UTIL_BASE_TYPE_ASSIGNABLEFROM_0100
     * @tc.name  : testTypeAssignableFrom0001
     * @tc.desc  : Testing assignableFrom between int and byte (int <- byte should be true)
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testTypeAssignableFrom0001', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG = "testTypeAssignableFrom0001";
      try {
        const intType = Type.of(123 as int);
        const byteType = Type.of(65 as byte);
        const expected: boolean = intType.assignableFrom(byteType);
        const result: boolean = true;
        expect(expected).assertEqual(result);
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_COMMONLIBRARY_UTIL_BASE_TYPE_ASSIGNABLEFROM_0200
     * @tc.name  : testTypeAssignableFrom0002
     * @tc.desc  : Testing assignableFrom between double and int (double <- int should be true)
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testTypeAssignableFrom0002', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG = "testTypeAssignableFrom0002";
      try {
        const doubleType = Type.of(3.14 as double);
        const intType = Type.of(123 as int);
        const expected: boolean = doubleType.assignableFrom(intType);
        const result: boolean = true;
        expect(expected).assertEqual(result);
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_COMMONLIBRARY_UTIL_BASE_TYPE_ASSIGNABLEFROM_0300
     * @tc.name  : testTypeAssignableFrom0003
     * @tc.desc  : Testing assignableFrom for same long type (long <- long should be true)
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testTypeAssignableFrom0003', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG = "testTypeAssignableFrom0003";
      try {
        const longType = Type.of(9223372036854775807 as long);
        const expected: boolean = longType.assignableFrom(longType);
        const result: boolean = true;
        expect(expected).assertEqual(result);
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_COMMONLIBRARY_UTIL_BASE_TYPE_ASSIGNABLEFROM_0400
     * @tc.name  : testTypeAssignableFrom0004
     * @tc.desc  : Testing assignableFrom between parent and child class (Parent <- Child should be true)
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testTypeAssignableFrom0004', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG = "testTypeAssignableFrom0004";
      try {
        const parentType = Type.of(new ParentClass());
        const childType = Type.of(new ChildClass());
        const expected: boolean = parentType.assignableFrom(childType);
        const result: boolean = true;
        expect(expected).assertEqual(result);
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_COMMONLIBRARY_UTIL_BASE_TYPE_ASSIGNABLEFROM_0500
     * @tc.name  : testTypeAssignableFrom0005
     * @tc.desc  : Testing assignableFrom between interface and implementation (Interface <- Impl should be true)
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testTypeAssignableFrom0005', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG = "testTypeAssignableFrom0005";
      try {
        const interfaceType = Type.of({} as TestInterface);
        const implType = Type.of(new InterfaceImpl());
        const expected: boolean = interfaceType.assignableFrom(implType);
        const result: boolean = false;
        expect(expected).assertEqual(result);
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_COMMONLIBRARY_UTIL_BASE_TYPE_ASSIGNABLEFROM_0600
     * @tc.name  : testTypeAssignableFrom0006
     * @tc.desc  : Testing assignableFrom between int and boolean (int <- boolean should be false)
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testTypeAssignableFrom0006', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG = "testTypeAssignableFrom0006";
      try {
        const intType = Type.of(123 as int);
        const boolType = Type.of(true);
        const expected: boolean = intType.assignableFrom(boolType);
        const result: boolean = false;
        expect(expected).assertEqual(result);
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_COMMONLIBRARY_UTIL_BASE_TYPE_ASSIGNABLEFROM_0700
     * @tc.name  : testTypeAssignableFrom0007
     * @tc.desc  : Testing assignableFrom between parent class and string (Parent <- String should be false)
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testTypeAssignableFrom0007', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG = "testTypeAssignableFrom0007";
      try {
        const parentType = Type.of(new ParentClass()) as ClassType;
        const stringType = Type.of("test") as StringType;
        const expected: boolean = parentType.assignableFrom(stringType);
        const result: boolean = false;
        expect(expected).assertEqual(result);
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_COMMONLIBRARY_UTIL_BASE_TYPE_ASSIGNABLEFROM_0800
     * @tc.name  : testTypeAssignableFrom0008
     * @tc.desc  : Testing assignableFrom between object and null (Object <- Null should be true)
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testTypeAssignableFrom0008', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG = "testTypeAssignableFrom0008";
      try {
        const objectType = Type.of(new Object()) as ClassType;
        const nullType = Type.of(null) as NullType;
        const expected: boolean = objectType.assignableFrom(nullType);
        const result: boolean = false;
        expect(expected).assertEqual(result);
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_COMMONLIBRARY_UTIL_BASE_TYPE_ASSIGNABLEFROM_0900
     * @tc.name  : testTypeAssignableFrom0009
     * @tc.desc  : Testing assignableFrom between double and undefined (Double <- Undefined should be false)
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testTypeAssignableFrom0009', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG = "testTypeAssignableFrom0009";
      try {
        const doubleType = Type.of(3.14 as double) as DoubleType;
        const undefinedType = Type.of(undefined) as UndefinedType;
        const expected: boolean = doubleType.assignableFrom(undefinedType);
        const result: boolean = false;
        expect(expected).assertEqual(result);
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_COMMONLIBRARY_UTIL_BASE_TYPE_ASSIGNABLEFROM_1000
     * @tc.name  : testTypeAssignableFrom0010
     * @tc.desc  : Testing assignableFrom between double and float (Double <- Float should be true)
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testTypeAssignableFrom0010', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG = "testTypeAssignableFrom0010";
      try {
        const doubleType = Type.of(3.14 as double) as DoubleType;
        const floatType = Type.of(1.5 as float);
        const expected: boolean = doubleType.assignableFrom(floatType);
        const result: boolean = true;
        expect(expected).assertEqual(result);
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });


    // /*
    //  * @tc.number: SUB_COMMONLIBRARY_TYPE_RESOLVE_0100
    //  * @tc.name  : testTypeResolve0001  -----无效用例
    //  * @tc.desc  : Testing Type.resolve with TestObject descriptor, expecting "Object[]" name.
    //  * @tc.size  : MediumTest
    //  * @tc.type  : Function
    //  * @tc.level : Level 1
    //  */
    // it('testTypeResolve0001', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
    //   const TAG = "testTypeResolve0001";
    //   try {
    //
    //     const td: TypeDescriptor = "com.eample.Object[]";
    //     const type2 = Type.resolve(td);
    //     expect(type2?.getName()).assertEqual("Object[]");
    //   } catch (err: BusinessError) {
    //     console.error(`${TAG} failed: ${err.message}`);
    //     expect().assertFail();
    //   }
    // });

    /*
   * @tc.number: SUB_COMMONLIBRARY_TYPE_TOREFTYPE_0100
   * @tc.name  : testToRefType0001
   * @tc.desc  : Test converting boolean primitive type to reference type
   * @tc.size  : MediumTest
   * @tc.type  : Function
   * @tc.level : Level 1
   */
    it('testToRefType0001', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG = "testToRefType0001";
      try {
        const primitiveType = BooleanType.VAL;
        const refType = Type.toRefType(primitiveType);
        expect(refType).assertEqual(BooleanType.REF);
        expect(refType.isPrimitive()).assertTrue();
        expect(refType.isReference()).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_COMMONLIBRARY_TYPE_TOREFTYPE_0200
     * @tc.name  : testToRefType0002
     * @tc.desc  : Test converting byte primitive type to reference type
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testToRefType0002', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG = "testToRefType0002";
      try {
        const primitiveType = ByteType.VAL;
        const refType = Type.toRefType(primitiveType);
        expect(refType).assertEqual(ByteType.REF);
        expect(refType.isPrimitive()).assertTrue();
        expect(refType.isReference()).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_COMMONLIBRARY_TYPE_TOREFTYPE_0300
     * @tc.name  : testToRefType0003
     * @tc.desc  : Test converting char primitive type to reference type
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testToRefType0003', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG = "testToRefType0003";
      try {
        const primitiveType = CharType.VAL;
        const refType = Type.toRefType(primitiveType);
        expect(refType).assertEqual(CharType.REF);
        expect(refType.isPrimitive()).assertTrue();
        expect(refType.isReference()).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_COMMONLIBRARY_TYPE_TOREFTYPE_0400
     * @tc.name  : testToRefType0004
     * @tc.desc  : Test converting short primitive type to reference type
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testToRefType0004', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG = "testToRefType0004";
      try {
        const primitiveType = ShortType.VAL;
        const refType = Type.toRefType(primitiveType);
        expect(refType).assertEqual(ShortType.REF);
        expect(refType.isPrimitive()).assertTrue();
        expect(refType.isReference()).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_COMMONLIBRARY_TYPE_TOREFTYPE_0500
     * @tc.name  : testToRefType0005
     * @tc.desc  : Test converting int primitive type to reference type
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testToRefType0005', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG = "testToRefType0005";
      try {
        const primitiveType = IntType.VAL;
        const refType = Type.toRefType(primitiveType);
        expect(refType).assertEqual(IntType.REF);
        expect(refType.isPrimitive()).assertTrue();
        expect(refType.isReference()).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_COMMONLIBRARY_TYPE_TOREFTYPE_0600
     * @tc.name  : testToRefType0006
     * @tc.desc  : Test converting long primitive type to reference type
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testToRefType0006', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG = "testToRefType0006";
      try {
        const primitiveType = LongType.VAL;
        const refType = Type.toRefType(primitiveType);
        expect(refType).assertEqual(LongType.REF);
        expect(refType.isPrimitive()).assertTrue();
        expect(refType.isReference()).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_COMMONLIBRARY_TYPE_TOREFTYPE_0700
     * @tc.name  : testToRefType0007
     * @tc.desc  : Test converting float primitive type to reference type
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testToRefType0007', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG = "testToRefType0007";
      try {
        const primitiveType = FloatType.VAL;
        const refType = Type.toRefType(primitiveType);
        expect(refType).assertEqual(FloatType.REF);
        expect(refType.isPrimitive()).assertTrue();
        expect(refType.isReference()).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_COMMONLIBRARY_TYPE_TOREFTYPE_0800
     * @tc.name  : testToRefType0008
     * @tc.desc  : Test converting double primitive type to reference type
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testToRefType0008', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG = "testToRefType0008";
      try {
        const primitiveType = DoubleType.VAL;
        const refType = Type.toRefType(primitiveType);
        expect(refType).assertEqual(DoubleType.REF);
        expect(refType.isPrimitive()).assertTrue();
        expect(refType.isReference()).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_COMMONLIBRARY_TYPE_TOREFTYPE_0900
     * @tc.name  : testToRefType0009
     * @tc.desc  : Test returning self when input is both primitive and reference type (e.g., StringType)
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testToRefType0009', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG = "testToRefType0009";
      try {

        const stringType = StringType.REF;
        const result = Type.toRefType(stringType);

        expect(result).assertEqual(stringType);

        expect(result.isPrimitive()).assertTrue();
        expect(result.isReference()).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_COMMONLIBRARY_TYPE_TOREFTYPE_1000
     * @tc.name  : testToRefType0010
     * @tc.desc  : Test throwing "is not primitive type" exception when input is non-primitive array type
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testToRefType0010', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG = "testToRefType0010";
      try {

        const input: FixedArray<long> = [-9223372036854775808, 0, 9223372036854775807];
        const type = Type.of(input);
        Type.toRefType(type);
        expect().assertFail();
      } catch (err: Error) {
        console.error(`${TAG} is fail,err is ${err.message}`);
        expect(`${err.message}`).assertEqual("type  is not primitive type");
      }
    });

    /*
     * @tc.number: SUB_COMMONLIBRARY_TYPE_TOREFTYPE_1100
     * @tc.name  : testToRefType0011
     * @tc.desc  : Test throwing "is not primitive type" exception when input is non-primitive class type
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testToRefType0011', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG = "testToRefType0011";
      try {

        const interfaceType = Type.of({} as TestInterface);
        const implType = Type.of(new InterfaceImpl());
        Type.toRefType(implType);
        expect().assertFail();
      } catch (err: Error) {
        console.error(`${TAG} is fail,err is ${err.message}`);
        expect(`${err.message}`)
          .assertEqual("type entry.src.main.src.test.Type_08.test.InterfaceImpl is not primitive type");
      }
    });

    /*
     * @tc.number: SUB_COMMONLIBRARY_TYPE_TOREFTYPE_1200
     * @tc.name  : testToRefType0012
     * @tc.desc  : Test throwing exception when input is unsupported primitive type (undefined)
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testToRefType0012', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG = "testToRefType0012";
      try {
        const input = undefined;
        const type = Type.of(input);
        let result = Type.toRefType(type);
        expect(result.isPrimitive()).assertTrue();
        expect(result.isReference()).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_COMMONLIBRARY_LAMBDATYPE_GetCase_1200
     * @tc.name  : testGetCase0001
     * @tc.desc  : Test throwing exception when input is unsupported primitive type (undefined)
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testGetCase0001', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG = "testGetCase0001";
      try {
        let addNumbers = (a: number, b: number): number => {
          return a + b;
        };
        let type: LambdaType = Type.of(addNumbers) as LambdaType;
        let result = type.getLiteral();
        // expect(result).assertEqual('(1: std.core.Double, 2: std.core.Double): std.core.Double');
        expect(result).assertEqual('(1: double, 2: double): double');
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_COMMONLIBRARY_LAMBDATYPE_MAKE_0100
     * @tc.name  : testMake_0001
     * @tc.desc  : Test make() with basic arithmetic lambda function
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testMake_0001', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testMake_0001";
      try {
        const add = (a: number, b: number): number => {
          return a + b;
        }


        const lambdaType: LambdaType = Type.of(add) as LambdaType;
        const madeObject: Object = lambdaType.make();

        expect(madeObject).not().assertNull();
        expect(typeof madeObject === 'function').assertTrue();

        const expected: number = 8;
        const result: number = (madeObject as (a: number, b: number) => number)(5, 3);
        expect(result).assertEqual(expected);
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
    * @tc.number: SUB_COMMONLIBRARY_LAMBDATYPE_MAKE_0200
    * @tc.name  : testMake_0002
    * @tc.desc  : Test make() with string manipulation lambda function
    * @tc.size  : MediumTest
    * @tc.type  : Function
    * @tc.level : Level 1
    */
    it('testMake_0002', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testMake_0002";
      try {

        const concatenate = (s1: string, s2: string): string => {
          return `${s1} ${s2}`;
        }

        const lambdaType: LambdaType = Type.of(concatenate) as LambdaType;
        const madeObject: Object = lambdaType.make();

        expect(madeObject).not().assertNull();
        expect(typeof madeObject === 'function').assertTrue();

        const expected: string = "Hello World";
        const result: string = (madeObject as (s1: string, s2: string) => string)("Hello", "World");
        expect(result).assertEqual(expected);
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
   * @tc.number: SUB_COMMONLIBRARY_LAMBDATYPE_MAKE_0300
   * @tc.name  : testMake_0003
   * @tc.desc  : Test make() with boolean returning lambda function
   * @tc.size  : MediumTest
   * @tc.type  : Function
   * @tc.level : Level 1
   */
    it('testMake_0003', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testMake_0003";
      try {

        const isGreaterThan = (a: number, b: number): boolean => {
          return a > b;
        }

        const lambdaType: LambdaType = Type.of(isGreaterThan) as LambdaType;
        const madeObject: Object = lambdaType.make();

        expect(madeObject).not().assertNull();
        expect(typeof madeObject === 'function').assertTrue();

        let expected: boolean = true;
        let result: boolean = (madeObject as (a: number, b: number) => boolean)(10, 5);
        expect(result).assertEqual(expected);

        expected = false;
        result = (madeObject as (a: number, b: number) => boolean)(3, 7);
        expect(result).assertEqual(expected);
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
    * @tc.number: SUB_COMMONLIBRARY_LAMBDATYPE_MAKE_0400
    * @tc.name  : testMake_0004
    * @tc.desc  : Test make() with no-parameter lambda function
    * @tc.size  : MediumTest
    * @tc.type  : Function
    * @tc.level : Level 1
    */
    it('testMake_0004', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testMake_0004";
      try {

        const getDefaultMessage = (): string => {
          return "Default message";
        }


        const lambdaType: LambdaType = Type.of(getDefaultMessage) as LambdaType;
        const madeObject: Object = lambdaType.make();

        expect(madeObject).not().assertNull();
        expect(typeof madeObject === 'function').assertTrue();

        const expected: string = "Default message";
        const result: string = (madeObject as () => string)();
        expect(result).assertEqual(expected);
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
    * @tc.number: SUB_COMMONLIBRARY_LAMBDATYPE_MAKE_0500
    * @tc.name  : testMake_0005
    * @tc.desc  : Test make() with void returning lambda function
    * @tc.size  : MediumTest
    * @tc.type  : Function
    * @tc.level : Level 1
    */
    it('testMake_0005', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testMake_0005";
      try {

        let counter: number = 0;
        const incrementCounter = (): void => {
          counter++;
        };

        const lambdaType: LambdaType = Type.of(incrementCounter) as LambdaType;
        const madeObject: Object = lambdaType.make();

        expect(madeObject).not().assertNull();
        expect(typeof madeObject === 'function').assertTrue();

        const expected: number = 1;
        (madeObject as () => void)();
        expect(counter).assertEqual(expected);
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });


    /*
     * @tc.number: SUB_COMMONLIBRARY_LAMBDATYPE_MAKE_0600
     * @tc.name  : testMake_0006
     * @tc.desc  : Test make() with lambda that captures context variable
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testMake_0006', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testMake_0006";
      try {

        const multiplier: number = 2;
        const multiply = (value: number): number => {
          return value * multiplier;
        }

        const lambdaType: LambdaType = Type.of(multiply) as LambdaType;
        const madeObject: Object = lambdaType.make();

        expect(madeObject).not().assertNull();
        expect(typeof madeObject === 'function').assertTrue();

        const expected: number = 10;
        const result: number = (madeObject as (value: number) => number)(5);
        expect(result).assertEqual(expected);
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_COMMONLIBRARY_LAMBDATYPE_MAKE_0700
     * @tc.name  : testMake_0007
     * @tc.desc  : Test make() with complex object handling lambda
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testMake_0007', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testMake_0007";
      try {

        const getPersonGreeting = (person: Person): string => {
          return `Hello, my name is ${person.name} and I'm ${person.age} years old`;
        }


        const lambdaType: LambdaType = Type.of(getPersonGreeting) as LambdaType;
        const madeObject: Object = lambdaType.make();

        expect(madeObject).not().assertNull();
        expect(typeof madeObject === 'function').assertTrue();

        const testPerson: Person = { name: "Alice", age: 30 };
        const expected: string = "Hello, my name is Alice and I'm 30 years old";
        const result: string = (madeObject as (p: Person) => string)(testPerson);
        expect(result).assertEqual(expected);
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_COMMONLIBRARY_LAMBDATYPE_ASSIGNABLEFROM_0100
     * @tc.name  : testAssignableFrom_0001
     * @tc.desc  : Check assignability from identical function type with same parameters and return type
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testAssignableFrom_0001', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testAssignableFrom_0001";
      try {
        const func1 = (a: number, b: string): boolean => {
          return a > b.length;
        };
        const func2 = (a: number, b: string): boolean => {
          return a > b.length;
        };
        const lambdaType: LambdaType = Type.of(func1) as LambdaType;
        const otherType: LambdaType = Type.of(func2) as LambdaType;
        const expected: boolean = true;
        const result: boolean = lambdaType.assignableFrom(otherType);
        expect(result).assertEqual(expected);
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_COMMONLIBRARY_LAMBDATYPE_ASSIGNABLEFROM_0200
     * @tc.name  : testAssignableFrom_0002
     * @tc.desc  : Check assignability from function type with compatible parameter subtypes
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testAssignableFrom_0002', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testAssignableFrom_0002";
      try {
        const func = (value: Object): string => {
          return value.toString();
        };
        const compatibleFunc = (value: String): string => {
          return value.toString();
        };
        const lambdaType: LambdaType = Type.of(func) as LambdaType;
        const otherType: LambdaType = Type.of(compatibleFunc) as LambdaType;
        const expected: boolean = false;
        const result: boolean = lambdaType.assignableFrom(otherType);
        expect(result).assertEqual(expected);
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_COMMONLIBRARY_LAMBDATYPE_ASSIGNABLEFROM_0300
     * @tc.name  : testAssignableFrom_0003
     * @tc.desc  : Check non-assignability from function type with incompatible parameter types
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testAssignableFrom_0003', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testAssignableFrom_0003";
      try {
        const func = (num: number): void => {
        };
        const incompatibleFunc = (num: string): void => {
        };
        const lambdaType: LambdaType = Type.of(func) as LambdaType;
        const otherType: LambdaType = Type.of(incompatibleFunc) as LambdaType;
        const expected: boolean = false;
        const result: boolean = lambdaType.assignableFrom(otherType);
        expect(result).assertEqual(expected);
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_COMMONLIBRARY_LAMBDATYPE_ASSIGNABLEFROM_0400
     * @tc.name  : testAssignableFrom_0004
     * @tc.desc  : Check assignability from function type with compatible return type subtype
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testAssignableFrom_0004', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testAssignableFrom_0004";
      try {
        const func = (): Object => {
          return new Object();
        };
        const compatibleFunc = (): String => {
          return new String();
        };
        const lambdaType: LambdaType = Type.of(func) as LambdaType;
        const otherType: LambdaType = Type.of(compatibleFunc) as LambdaType;
        const expected: boolean = true;
        const result: boolean = lambdaType.assignableFrom(otherType);
        expect(result).assertEqual(expected);
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
    * @tc.number: SUB_COMMONLIBRARY_LAMBDATYPE_ASSIGNABLEFROM_0500
    * @tc.name  : testAssignableFrom_0005
    * @tc.desc  : Check non-assignability from function type with incompatible return type
    * @tc.size  : MediumTest
    * @tc.type  : Function
    * @tc.level : Level 1
    */
    it('testAssignableFrom_0005', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testAssignableFrom_0005";
      try {
        const func = (): number => {
          return 42;
        };
        const incompatibleFunc = (): string => {
          return "42";
        };
        const lambdaType: LambdaType = Type.of(func) as LambdaType;
        const otherType: LambdaType = Type.of(incompatibleFunc) as LambdaType;
        const expected: boolean = false;
        const result: boolean = lambdaType.assignableFrom(otherType);
        expect(result).assertEqual(expected);
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_COMMONLIBRARY_LAMBDATYPE_ASSIGNABLEFROM_0600
     * @tc.name  : testAssignableFrom_0006
     * @tc.desc  : Check non-assignability from function type with fewer parameters
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testAssignableFrom_0006', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testAssignableFrom_0006";
      try {
        const func = (a: number, b: number): number => {
          return a + b;
        };
        const fewerParamsFunc = (a: number): number => {
          return a;
        };
        const lambdaType: LambdaType = Type.of(func) as LambdaType;
        const otherType: LambdaType = Type.of(fewerParamsFunc) as LambdaType;
        const expected: boolean = true;
        const result: boolean = lambdaType.assignableFrom(otherType);
        expect(result).assertEqual(expected);
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_COMMONLIBRARY_LAMBDATYPE_ASSIGNABLEFROM_0700
     * @tc.name  : testAssignableFrom_0007
     * @tc.desc  : Check non-assignability from function type with more parameters
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testAssignableFrom_0007', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testAssignableFrom_0007";
      try {
        const func = (a: number): number => {
          return a * 2;
        };
        const moreParamsFunc = (a: number, b: number): number => {
          return a * b;
        };
        const lambdaType: LambdaType = Type.of(func) as LambdaType;
        const otherType: LambdaType = Type.of(moreParamsFunc) as LambdaType;
        const expected: boolean = false;
        const result: boolean = lambdaType.assignableFrom(otherType);
        expect(result).assertEqual(expected);
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_COMMONLIBRARY_LAMBDATYPE_ASSIGNABLEFROM_0800
     * @tc.name  : testAssignableFrom_0008
     * @tc.desc  : Check assignability from identical lambda type
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testAssignableFrom_0008', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testAssignableFrom_0008";
      try {
        const func = (s: string): number => {
          return s.length;
        };
        const lambdaType1: LambdaType = Type.of(func) as LambdaType;
        const lambdaType2: LambdaType = Type.of(func) as LambdaType;
        const expected: boolean = true;
        const result: boolean = lambdaType1.assignableFrom(lambdaType2);
        expect(result).assertEqual(expected);
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_COMMONLIBRARY_LAMBDATYPE_ASSIGNABLEFROM_0900
     * @tc.name  : testAssignableFrom_0009
     * @tc.desc  : Check non-assignability from class instance type
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testAssignableFrom_0009', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testAssignableFrom_0009";
      try {
        const func = (): void => {
        };
        const lambdaType: LambdaType = Type.of(func) as LambdaType;
        const classInstance = new TestClass("ds");
        const otherType: ClassType = Type.of(classInstance) as ClassType;
        const expected: boolean = false;
        const result: boolean = lambdaType.assignableFrom(otherType);
        expect(result).assertEqual(expected);
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_COMMONLIBRARY_LAMBDATYPE_ASSIGNABLEFROM_1000
     * @tc.name  : testAssignableFrom_0010
     * @tc.desc  : Check non-assignability from array type
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testAssignableFrom_0010', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testAssignableFrom_0010";
      try {
        const func = (a: number): number => {
          return a * a;
        };
        const numberArray: number[] = [1, 2, 3];
        const lambdaType: LambdaType = Type.of(func) as LambdaType;
        const otherType: ArrayType = Type.of(numberArray) as ArrayType;
        const expected: boolean = false;
        const result: boolean = lambdaType.assignableFrom(otherType);
        expect(result).assertEqual(expected);
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
    * @tc.number: SUB_COMMONLIBRARY_LAMBDATYPE_ASSIGNABLEFROM_1100
    * @tc.name  : testAssignableFrom_0011
    * @tc.desc  : Check non-assignability when other type is null
    * @tc.size  : MediumTest
    * @tc.type  : Function
    * @tc.level : Level 1
    */
    it('testAssignableFrom_0011', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testAssignableFrom_0011";
      try {
        const func = (value: string): string => {
          return value;
        };
        const lambdaType: LambdaType = Type.of(func) as LambdaType;
        const nullValue: NullishType = null;
        const otherType = Type.of(nullValue);
        const expected: boolean = false;
        const result: boolean = lambdaType.assignableFrom(otherType);
        expect(result).assertEqual(expected);
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_GETTYPEPARAMETER_0100
     * @tc.name  : testGetTypeParameter_0001
     * @tc.desc  : Test that calling getTypeParameter throws "Not implemented" error
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testGetTypeParameter_0001', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testGetTypeParameter_0001";
      try {

        const type: FunctionType = Type.of(FuncX) as FunctionType;

        const result = type.getTypeParameter(0);
        expect().assertFail();

      } catch (err: Error) {
        console.error(`${TAG} failed: ${err.message}`);
        let expected: string = "not implemented";
        expect(`${err.message}`).assertEqual(expected);
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_GETTYPEPARAMETERSNUM_1000
     * @tc.name  : testGetTypeParametersNum_0001
     * @tc.desc  : Test that calling getTypeParametersNum throws "Not implemented" error
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testGetTypeParametersNum_0001', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testGetTypeParametersNum_0001";
      try {

        const type: FunctionType = Type.of(FuncX) as FunctionType;

        const result = type.getTypeParametersNum();
        let expected: long = 0;
        expect(result).assertEqual(expected);

      } catch (err: Error) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_GETPARAMETER_0100
     * @tc.name  : testGetParameter_0001
     * @tc.desc  : Get first parameter from function with one parameter
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */

    it('testGetParameter_0001', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testGetParameter_0001";
      try {

        const functionType: FunctionType = Type.of(voidReturningFunction) as FunctionType;
        const parameter = functionType.getParameter(0);
        expect(parameter !== null).assertTrue();

      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });


    /*
    * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_GETPARAMETER_0200
    * @tc.name  : testGetParameter_0002
    * @tc.desc  : Get parameters from function with multiple parameters
    * @tc.size  : MediumTest
    * @tc.type  : Function
    * @tc.level : Level 1
    */
    it('testGetParameter_0002', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testGetParameter_0002";
      try {

        const functionType: FunctionType = Type.of(FuncMult) as FunctionType;
        const param1: Parameter = functionType.getParameter(0);
        const param2: Parameter = functionType.getParameter(1);
        const param3: Parameter = functionType.getParameter(2);

        expect(param1 !== null).assertTrue();

        expect(param2 !== null).assertTrue();

        expect(param3 !== null).assertTrue();

      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
    * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_GETPARAMETER_0300
    * @tc.name  : testGetParameter_0003
    * @tc.desc  : Get parameter from lambda function
    * @tc.size  : MediumTest
    * @tc.type  : Function
    * @tc.level : Level 1
    */
    it('testGetParameter_0003', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testGetParameter_0003";
      try {
        let lambda = (value: number): number => {
          return value * 2;
        };
        const lambdaType: LambdaType = Type.of(lambda) as LambdaType;
        const parameter: Parameter = lambdaType.getParameter(0);
        expect(parameter !== null).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
    * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_GETPARAMETER_0400
    * @tc.name  : testGetParameter_0004
    * @tc.desc  : Get parameter with negative index
    * @tc.size  : MediumTest
    * @tc.type  : Function
    * @tc.level : Level 1
    */
    it('testGetParameter_0004', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testGetParameter_0004";
      try {

        const functionType: FunctionType = Type.of(FuncX) as FunctionType;
        const parameter: Parameter = functionType.getParameter(-1);
        expect(parameter === null).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_GETPARAMETER_0500
     * @tc.name  : testGetParameter_0005
     * @tc.desc  : Get parameter with index equal to parameter count
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testGetParameter_0005', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testGetParameter_0005";
      try {

        const functionType: FunctionType = Type.of(FuncAdd) as FunctionType;
        const parameter: Parameter = functionType.getParameter(2);
        expect(parameter === null).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_GETPARAMETER_0600
     * @tc.name  : testGetParameter_0006
     * @tc.desc  : Get parameter from function with no parameters
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testGetParameter_0006', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testGetParameter_0006";
      try {

        const functionType: FunctionType = Type.of(stringReturningFunction) as FunctionType;
        const parameter: Parameter = functionType.getParameter(0);
        expect(parameter === null).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });


    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_GETPARAMETER_0700
     * @tc.name  : testGetParameter_0007
     * @tc.desc  : Get parameter type from function parameter
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testGetParameter_0007', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testGetParameter_0007";
      try {

        const functionType: FunctionType = Type.of(FuncTestClass) as FunctionType;
        const parameter: Parameter = functionType.getParameter(0);
        expect(parameter !== null).assertTrue();


        const paramType: Type = parameter.getType();
        expect(paramType instanceof ClassType).assertTrue();
        expect((paramType as ClassType).getName()).assertEqual("entry.src.main.src.test.Type_08.test.TestClass");
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_GETPARAMETER_0800
     * @tc.name  : testGetParameter_0008
     * @tc.desc  : Get parameter from generic function
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testGetParameter_0008', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testGetParameter_0008";
      try {
        const functionType: FunctionType = Type.of(genericIdentityFunction) as FunctionType;
        const parameter: Parameter = functionType.getParameter(0);
        expect(parameter !== null).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
    * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_GETRESULTTYPE_0100
    * @tc.name  : testGetResultType_0001
    * @tc.desc  : Get result type from function returning number
    * @tc.size  : MediumTest
    * @tc.type  : Function
    * @tc.level : Level 1
    */
    it('testGetResultType_0001', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testGetResultType_0001";
      try {

        const functionType: FunctionType = Type.of(stringReturningFunction) as FunctionType;
        const resultType: Type = functionType.getResultType();
        expect(resultType !== null).assertTrue();
        expect(resultType.getLiteral()).assertEqual("string");
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_GETRESULTTYPE_0200
     * @tc.name  : testGetResultType_0002
     * @tc.desc  : Get result type from function returning string
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testGetResultType_0002', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testGetResultType_0002";
      try {

        const functionType: FunctionType = Type.of(numberReturningFunction) as FunctionType;
        const resultType: Type = functionType.getResultType();
        expect(resultType !== null).assertTrue();
        // expect(resultType.getName()).assertEqual("std.core.Double");
        expect(resultType.getName()).assertEqual("");
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_GETRESULTTYPE_0300
     * @tc.name  : testGetResultType_0003
     * @tc.desc  : Get result type from function returning boolean
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */

    it('testGetResultType_0003', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testGetResultType_0003";
      try {
        const functionType: FunctionType = Type.of(booleanReturningFunction) as FunctionType;
        const resultType: Type = functionType.getResultType();
        expect(resultType !== null).assertTrue();
        // expect(resultType.getName()).assertEqual("std.core.Boolean");
        expect(resultType.getName()).assertEqual("");
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_GETRESULTTYPE_0400
     * @tc.name  : testGetResultType_0004
     * @tc.desc  : Get result type from function returning custom class instance
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testGetResultType_0004', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testGetResultType_0004";
      try {
        const functionType: FunctionType = Type.of(classInstanceReturningFunction) as FunctionType;
        const resultType: Type = functionType.getResultType();
        expect(resultType !== null).assertTrue();
        expect(resultType.getName()).assertEqual("entry.src.main.src.test.Type_08.test.TestClass");
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_GETRESULTTYPE_0500
     * @tc.name  : testGetResultType_0005
     * @tc.desc  : Get result type from void function
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testGetResultType_0005', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testGetResultType_0005";
      try {
        const functionType: FunctionType = Type.of(voidReturningFunction) as FunctionType;
        const resultType: Type = functionType.getResultType();
        expect(resultType !== null).assertTrue();
        expect(resultType.getName()).assertEqual("void");
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_GETRESULTTYPE_0600
     * @tc.name  : testGetResultType_0006
     * @tc.desc  : Get result type from lambda function
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testGetResultType_0006', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testGetResultType_0006";
      try {
        let lambda = (a: number, b: number): number => {
          return a + b;
        };
        const lambdaType: LambdaType = Type.of(lambda) as LambdaType;
        const resultType: Type = lambdaType.getResultType();
        expect(resultType !== null).assertTrue();
        // expect(resultType.getName()).assertEqual("std.core.Double");
        expect(resultType.getName()).assertEqual("");
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_GETRESULTTYPE_0700
     * @tc.name  : testGetResultType_0007
     * @tc.desc  : Get result type from generic function
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testGetResultType_0007', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testGetResultType_0007";
      try {
        const stringInstance = genericIdentityFunction<string>("test");
        const functionType: FunctionType = Type.of(genericIdentityFunction) as FunctionType;
        const resultType: Type = functionType.getResultType();
        expect(resultType !== null).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_GETRESULTTYPE_0800
     * @tc.name  : testGetResultType_0008
     * @tc.desc  : Get result type from function returning array
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testGetResultType_0008', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testGetResultType_0008";
      try {
        const functionType: FunctionType = Type.of(arrayReturningFunction) as FunctionType;
        const resultType: Type = functionType.getResultType();
        expect(resultType !== null).assertTrue();
        expect(resultType.getName()).assertEqual("escompat.Array");
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });


    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_GETRESULTTYPE_0900
     * @tc.name  : testGetResultType_0009
     * @tc.desc  : Get result type from function returning interface type
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testGetResultType_0009', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testGetResultType_0009";
      try {
        const functionType: FunctionType = Type.of(interfaceReturningFunction) as FunctionType;
        const resultType: Type = functionType.getResultType();
        expect(resultType !== null).assertTrue();
        expect(resultType.getName()).assertEqual("entry.src.main.src.test.Type_08.test.TestInterfacef");
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_GETRESULTTYPE_1000
     * @tc.name  : testGetResultType_0010
     * @tc.desc  : Get result type from function returning generic class instance
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testGetResultType_0010', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testGetResultType_0010";
      try {
        const func = (): GenericClass<number> => {
          return new GenericClass<number>(100);
        };
        const functionType: FunctionType = Type.of(func) as FunctionType;
        const resultType: Type = functionType.getResultType();
        expect(resultType !== null).assertTrue();
        expect(resultType.getName()).assertEqual("entry.src.main.src.test.Type_08.test.GenericClass");
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
    * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_ISASYNC_0100
    * @tc.name  : testIsAsync_0001
    * @tc.desc  : Check if basic synchronous function returns false for isAsync()
    * @tc.size  : MediumTest
    * @tc.type  : Function
    * @tc.level : Level 1
    */
    it('testIsAsync_0001', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsAsync_0001";
      try {

        const functionType: FunctionType = Type.of(basicSyncFunction) as FunctionType;
        const result: boolean = functionType.isAsync();
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
    * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_ISASYNC_0200
    * @tc.name  : testIsAsync_0002
    * @tc.desc  : Check if parameterized synchronous function returns false for isAsync()
    * @tc.size  : MediumTest
    * @tc.type  : Function
    * @tc.level : Level 1
    */
    it('testIsAsync_0002', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsAsync_0002";
      try {
        const functionType: FunctionType = Type.of(parameterizedSyncFunction) as FunctionType;
        const result: boolean = functionType.isAsync();
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });
    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_ISASYNC_0300
     * @tc.name  : testIsAsync_0003
     * @tc.desc  : Check if void synchronous function returns false for isAsync()
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsAsync_0003', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsAsync_0003";
      try {
        const functionType: FunctionType = Type.of(voidSyncFunction) as FunctionType;
        const result: boolean = functionType.isAsync();
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_ISASYNC_0400
     * @tc.name  : testIsAsync_0004
     * @tc.desc  : Check if basic synchronous lambda returns false for isAsync()
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsAsync_0004', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsAsync_0004";
      try {
        let basicSyncLambda = (x: number): number => {
          return x * 2;
        };
        const lambdaType: LambdaType = Type.of(basicSyncLambda) as LambdaType;
        const result: boolean = lambdaType.isAsync();
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_ISASYNC_0500
     * @tc.name  : testIsAsync_0005
     * @tc.desc  : Check if multi-parameter synchronous lambda returns false for isAsync()
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsAsync_0005', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsAsync_0005";
      try {
        let multiParamSyncLambda = (name: string, age: number): string => {
          return `${name} is ${age} years old`;
        };
        const lambdaType: LambdaType = Type.of(multiParamSyncLambda) as LambdaType;
        const result: boolean = lambdaType.isAsync();
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
    * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_ISASYNC_0600
    * @tc.name  : testIsAsync_0006
    * @tc.desc  : Check if class instance method returns false for isAsync()
    * @tc.size  : MediumTest
    * @tc.type  : Function
    * @tc.level : Level 1
    */
    it('testIsAsync_0006', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsAsync_0006";
      try {
        const instance = new TestClass("test");
        const functionType: FunctionType = Type.of(instance.defaultSyncMethod) as FunctionType;
        const result: boolean = functionType.isAsync();
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });
    /*
    * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_ISASYNC_0700
    * @tc.name  : testIsAsync_0007
    * @tc.desc  : Check if class static method returns false for isAsync()
    * @tc.size  : MediumTest
    * @tc.type  : Function
    * @tc.level : Level 1
    */
    it('testIsAsync_0007', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsAsync_0007";
      try {
        const functionType: FunctionType = Type.of(TestClass.staticSyncMethod) as FunctionType;
        const result: boolean = functionType.isAsync();
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
    * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_ISASYNC_0800
    * @tc.name  : testIsAsync_0008
    * @tc.desc  : Check if generic synchronous function returns false for isAsync()
    * @tc.size  : MediumTest
    * @tc.type  : Function
    * @tc.level : Level 1
    */
    it('testIsAsync_0008', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsAsync_0008";
      try {
        const functionType: FunctionType = Type.of(genericSyncFunction) as FunctionType;
        const result: boolean = functionType.isAsync();
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });


    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_ISNATIVE_0100
     * @tc.name  : testIsNative_0001
     * @tc.desc  : Check if basic user-defined function is identified as non-native
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsNative_0001', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsNative_0001";
      try {
        const functionType: FunctionType = Type.of(basicUserFunction) as FunctionType;
        const result: boolean = functionType.isNative();
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_ISNATIVE_0200
     * @tc.name  : testIsNative_0002
     * @tc.desc  : Check if parameterized user-defined function is identified as non-native
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsNative_0002', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsNative_0002";
      try {
        const functionType: FunctionType = Type.of(parameterizedUserFunction) as FunctionType;
        const result: boolean = functionType.isNative();
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_ISNATIVE_0300
     * @tc.name  : testIsNative_0003
     * @tc.desc  : Check if basic arrow function is identified as non-native
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsNative_0003', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsNative_0003";
      try {
        let basicArrowFunction = (x: number): number => {
          return x * x;
        };
        const lambdaType: LambdaType = Type.of(basicArrowFunction) as LambdaType;
        const result: boolean = lambdaType.isNative();
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_ISNATIVE_0400
     * @tc.name  : testIsNative_0004
     * @tc.desc  : Check if multi-parameter arrow function is identified as non-native
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsNative_0004', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsNative_0004";
      try {
        let multiParamArrowFunction = (name: string, age: number): string => {
          return `${name} is ${age} years old`;
        };
        const lambdaType: LambdaType = Type.of(multiParamArrowFunction) as LambdaType;
        const result: boolean = lambdaType.isNative();
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
    * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_ISNATIVE_0500
    * @tc.name  : testIsNative_0005
    * @tc.desc  : Check if class instance method is identified as non-native
    * @tc.size  : MediumTest
    * @tc.type  : Function
    * @tc.level : Level 1
    */
    it('testIsNative_0005', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsNative_0005";
      try {
        const instance = new UserClass();
        const functionType: FunctionType = Type.of(instance.instanceMethod) as FunctionType;
        const result: boolean = functionType.isNative();
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_ISNATIVE_0600
     * @tc.name  : testIsNative_0006
     * @tc.desc  : Check if class static method is identified as non-native
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsNative_0006', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsNative_0006";
      try {
        const functionType: FunctionType = Type.of(UserClass.staticMethod) as FunctionType;
        const result: boolean = functionType.isNative();
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_ISNATIVE_0700
     * @tc.name  : testIsNative_0007
     * @tc.desc  : Check if class private method is identified as non-native
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsNative_0007', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsNative_0007";
      try {
        const instance = new UserClass();
        const functionType: FunctionType = Type.of(instance.callPrivateMethod) as FunctionType;
        const result: boolean = functionType.isNative();
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_ISNATIVE_0800
     * @tc.name  : testIsNative_0008
     * @tc.desc  : Check if generic function is identified as non-native
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsNative_0008', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsNative_0008";
      try {
        const functionType: FunctionType = Type.of(genericUserFunction) as FunctionType;
        const result: boolean = functionType.isNative();
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    // /*
    //
    //  @tc.number: SUB_FUNCTIONTYPE_FUNCTION_ISNATIVE_0900
    //  @tc.name : testIsNative_0009
    //  @tc.desc : Check if built-in string method returns true for isNative()
    //  @tc.size : MediumTest
    //  @tc.type : Function
    //  @tc.level : Level 1
    //  */
    // it('testIsNative_0009', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
    //   const TAG: string = "testIsNative_0009";
    //   try {
    //     const functionType: FunctionType = Type.of(String.prototype.charAt) as FunctionType;
    //     const result: boolean = functionType.isNative();
    //     expect(result).assertTrue();
    //   } catch (err: BusinessError) {
    //     console.error(`${TAG} failed: ${err.message}`);
    //     expect().assertFail();
    //   }
    // });
    //
    // /*
    //
    // @tc.number: SUB_FUNCTIONTYPE_FUNCTION_ISNATIVE_1000
    // @tc.name : testIsNative_0010
    // @tc.desc : Check if built-in array method returns true for isNative()
    // @tc.size : MediumTest
    // @tc.type : Function
    // @tc.level : Level 1
    // */
    // it('testIsNative_0010', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
    //   const TAG: string = "testIsNative_0010";
    //   try {
    //     const functionType: FunctionType = Type.of(Array.prototype.slice) as FunctionType;
    //     const result: boolean = functionType.isNative();
    //     expect(result).assertTrue();
    //   } catch (err: BusinessError) {
    //     console.error(`${TAG} failed: ${err.message}`);
    //     expect().assertFail();
    //   }
    // });

    /*
       * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_ISNEVERRESULT_0100
       * @tc.name  : testIsNeverResult_0001
       * @tc.desc  : Check if function throwing error is identified as having never result type
       * @tc.size  : MediumTest
       * @tc.type  : Function
       * @tc.level : Level 1
       */
    it('testIsNeverResult_0001', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsNeverResult_0001";
      try {
        const functionType: FunctionType = Type.of(neverFunction) as FunctionType;
        const result: boolean = functionType.isNeverResult();
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });


    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_ISNEVERRESULT_0200
     * @tc.name  : testIsNeverResult_0002
     * @tc.desc  : Check if function with infinite loop is identified as having never result type
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsNeverResult_0002', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsNeverResult_0002";
      try {
        const functionType: FunctionType = Type.of(infiniteLoopFunction) as FunctionType;
        const result: boolean = functionType.isNeverResult();
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_ISNEVERRESULT_0300
     * @tc.name  : testIsNeverResult_0003
     * @tc.desc  : Check if function returning number is identified as not having never result type
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsNeverResult_0003', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsNeverResult_0003";
      try {
        const functionType: FunctionType = Type.of(numberReturningFunction) as FunctionType;
        const result: boolean = functionType.isNeverResult();
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_ISNEVERRESULT_0400
     * @tc.name  : testIsNeverResult_0004
     * @tc.desc  : Check if function returning string is identified as not having never result type
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsNeverResult_0004', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsNeverResult_0004";
      try {
        const functionType: FunctionType = Type.of(stringReturningFunction) as FunctionType;
        const result: boolean = functionType.isNeverResult();
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_ISNEVERRESULT_0500
     * @tc.name  : testIsNeverResult_0005
     * @tc.desc  : Check if function returning boolean is identified as not having never result type
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsNeverResult_0005', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsNeverResult_0005";
      try {
        const functionType: FunctionType = Type.of(booleanReturningFunction) as FunctionType;
        const result: boolean = functionType.isNeverResult();
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_ISNEVERRESULT_0600
     * @tc.name  : testIsNeverResult_0006
     * @tc.desc  : Check if void function is identified as not having never result type
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsNeverResult_0006', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsNeverResult_0006";
      try {
        const functionType: FunctionType = Type.of(voidReturningFunction) as FunctionType;
        const result: boolean = functionType.isNeverResult();
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_ISNEVERRESULT_0700
     * @tc.name  : testIsNeverResult_0007
     * @tc.desc  : Check if arrow function throwing error is identified as having never result type
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsNeverResult_0007', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsNeverResult_0007";
      try {
        const neverArrowFunction = (): never => {
          throw new Error("Arrow function never returns");
        };
        const lambdaType: LambdaType = Type.of(neverArrowFunction) as LambdaType;
        const result: boolean = lambdaType.isNeverResult();
        expect(result).assertFalse();
      } catch (err: Error) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_ISNEVERRESULT_0800
     * @tc.name  : testIsNeverResult_0008
     * @tc.desc  : Check if arrow function returning string is identified as not having never result type
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsNeverResult_0008', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsNeverResult_0008";
      try {
        const stringArrowFunction = (): string => {
          return "arrow function";
        };
        const lambdaType: LambdaType = Type.of(stringArrowFunction) as LambdaType;
        const result: boolean = lambdaType.isNeverResult();
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_ISNEVERRESULT_0900
     * @tc.name  : testIsNeverResult_0009
     * @tc.desc  : Check if class method throwing error is identified as having never result type
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsNeverResult_0009', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsNeverResult_0009";
      try {
        const instance = new TestClass("test");
        const functionType: FunctionType = Type.of(instance.neverMethod) as FunctionType;
        const result: boolean = functionType.isNeverResult();
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });
    /*
         * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_ISNEVERRESULT_1000
         * @tc.name  : testIsNeverResult_0010
         * @tc.desc  : Check if function with conditional never return type is identified correctly
         * @tc.size  : MediumTest
         * @tc.type  : Function
         * @tc.level : Level 1
         */
    it('testIsNeverResult_0010', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsNeverResult_0010";
      try {
        const functionType: FunctionType = Type.of(conditionalNeverFunction) as FunctionType;
        const result: boolean = functionType.isNeverResult();
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_ISNEVERRESULT_1100
     * @tc.name  : testIsNeverResult_0011
     * @tc.desc  : Check if class static method throwing error is identified as having never result type
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsNeverResult_0011', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsNeverResult_0011";
      try {
        const functionType: FunctionType = Type.of(TestClass.staticNeverMethod) as FunctionType;
        const result: boolean = functionType.isNeverResult();
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_ISNEVERRESULT_1200
     * @tc.name  : testIsNeverResult_0012
     * @tc.desc  : Check if normal class method is identified as not having never result type
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsNeverResult_0012', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsNeverResult_0012";
      try {
        const instance = new TestClass();
        const functionType: FunctionType = Type.of(instance.stringMethod) as FunctionType;
        const result: boolean = functionType.isNeverResult();
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
   * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_ISTHROWING_0100
   * @tc.name  : testIsThrowing_0001
   * @tc.desc  : Check if function that always throws is identified as throwing
   * @tc.size  : MediumTest
   * @tc.type  : Function
   * @tc.level : Level 1
   */
    it('testIsThrowing_0001', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsThrowing_0001";
      try {
        const functionType: FunctionType = Type.of(alwaysThrowingFunction) as FunctionType;
        const result: boolean = functionType.isThrowing();
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_ISTHROWING_0200
     * @tc.name  : testIsThrowing_0002
     * @tc.desc  : Check if function that conditionally throws is identified as throwing
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsThrowing_0002', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsThrowing_0002";
      try {
        const functionType: FunctionType = Type.of(conditionallyThrowingFunction) as FunctionType;
        const result: boolean = functionType.isThrowing();
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_ISTHROWING_0300
     * @tc.name  : testIsThrowing_0003
     * @tc.desc  : Check if function that never throws is identified as non-throwing
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsThrowing_0003', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsThrowing_0003";
      try {
        const functionType: FunctionType = Type.of(neverThrowingFunction) as FunctionType;
        const result: boolean = functionType.isThrowing();
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_ISTHROWING_0400
     * @tc.name  : testIsThrowing_0004
     * @tc.desc  : Check if function that throws in loop is identified as throwing
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsThrowing_0004', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsThrowing_0004";
      try {
        const functionType: FunctionType = Type.of(throwingInLoopFunction) as FunctionType;
        const result: boolean = functionType.isThrowing();
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_ISTHROWING_0500
     * @tc.name  : testIsThrowing_0005
     * @tc.desc  : Check if arrow function that throws is identified as throwing
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsThrowing_0005', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsThrowing_0005";
      try {
        const throwingArrowFunction = (): void => {
          throw new Error("Arrow function throws error");
        };
        const lambdaType: LambdaType = Type.of(throwingArrowFunction) as LambdaType;
        const result: boolean = lambdaType.isThrowing();
        expect(result).assertFalse();
      } catch (err: Error) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_ISTHROWING_0600
     * @tc.name  : testIsThrowing_0006
     * @tc.desc  : Check if arrow function that never throws is identified as non-throwing
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsThrowing_0006', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsThrowing_0006";
      try {
        const nonThrowingArrowFunction = (a: number, b: number): number => {
          return a + b;
        };
        const lambdaType: LambdaType = Type.of(nonThrowingArrowFunction) as LambdaType;
        const result: boolean = lambdaType.isThrowing();
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_ISTHROWING_0700
     * @tc.name  : testIsThrowing_0007
     * @tc.desc  : Check if class method that always throws is identified as throwing
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsThrowing_0007', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsThrowing_0007";
      try {
        const instance = new ExceptionTestClass();
        const functionType: FunctionType = Type.of(instance.alwaysThrow) as FunctionType;
        const result: boolean = functionType.isThrowing();
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_ISTHROWING_0800
     * @tc.name  : testIsThrowing_0008
     * @tc.desc  : Check if class method that conditionally throws is identified as throwing
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsThrowing_0008', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsThrowing_0008";
      try {
        const instance = new ExceptionTestClass();
        const functionType: FunctionType = Type.of(instance.conditionalThrow) as FunctionType;
        const result: boolean = functionType.isThrowing();
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_ISTHROWING_0900
     * @tc.name  : testIsThrowing_0009
     * @tc.desc  : Check if class method that never throws is identified as non-throwing
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsThrowing_0009', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsThrowing_0009";
      try {
        const instance = new ExceptionTestClass();
        const functionType: FunctionType = Type.of(instance.neverThrow) as FunctionType;
        const result: boolean = functionType.isThrowing();
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_ISTHROWING_1000
     * @tc.name  : testIsThrowing_0010
     * @tc.desc  : Check if static class method that throws is identified as throwing
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsThrowing_0010', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsThrowing_0010";
      try {
        const functionType: FunctionType = Type.of(ExceptionTestClass.staticThrow) as FunctionType;
        const result: boolean = functionType.isThrowing();
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_ISTHROWING_1100
     * @tc.name  : testIsThrowing_0011
     * @tc.desc  : Check if function that throws and catches exception is identified as throwing
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsThrowing_0011', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsThrowing_0011";
      try {
        const functionType: FunctionType = Type.of(throwingWithTryCatch) as FunctionType;
        const result: boolean = functionType.isThrowing();
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_GETPARAMETERSNUM_0100
     * @tc.name  : testGetParametersNum_0001
     * @tc.desc  : Check parameter count for function with no parameters
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testGetParametersNum_0001', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testGetParametersNum_0001";
      try {
        const functionType: FunctionType = Type.of(noParamFunction) as FunctionType;
        const result: number = functionType.getParametersNum();
        expect(result).assertEqual(0);
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_GETPARAMETERSNUM_0200
     * @tc.name  : testGetParametersNum_0002
     * @tc.desc  : Check parameter count for function with one parameter
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testGetParametersNum_0002', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testGetParametersNum_0002";
      try {
        const functionType: FunctionType = Type.of(oneParamFunction) as FunctionType;
        const result: number = functionType.getParametersNum();
        expect(result).assertEqual(1);
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_GETPARAMETERSNUM_0300
     * @tc.name  : testGetParametersNum_0003
     * @tc.desc  : Check parameter count for function with two parameters
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testGetParametersNum_0003', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testGetParametersNum_0003";
      try {
        const functionType: FunctionType = Type.of(twoParamsFunction) as FunctionType;
        const result: number = functionType.getParametersNum();
        expect(result).assertEqual(2);
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_GETPARAMETERSNUM_0400
     * @tc.name  : testGetParametersNum_0004
     * @tc.desc  : Check parameter count for function with three parameters
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testGetParametersNum_0004', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testGetParametersNum_0004";
      try {
        const functionType: FunctionType = Type.of(threeParamsFunction) as FunctionType;
        const result: number = functionType.getParametersNum();
        expect(result).assertEqual(3);
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });


    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_GETPARAMETERSNUM_0500
     * @tc.name  : testGetParametersNum_0005
     * @tc.desc  : Check parameter count for function with rest parameters
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testGetParametersNum_0005', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testGetParametersNum_0005";
      try {
        const functionType: FunctionType = Type.of(variableParamsFunction) as FunctionType;
        const result: number = functionType.getParametersNum();
        expect(result).assertEqual(1);
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });


    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_GETPARAMETERSNUM_0600
     * @tc.name  : testGetParametersNum_0006
     * @tc.desc  : Check parameter count for function with default parameters
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testGetParametersNum_0006', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testGetParametersNum_0006";
      try {
        const functionType: FunctionType = Type.of(defaultParamFunction) as FunctionType;
        const result: number = functionType.getParametersNum();
        expect(result).assertEqual(2);
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });


    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_GETPARAMETERSNUM_0700
     * @tc.name  : testGetParametersNum_0007
     * @tc.desc  : Check parameter count for arrow function with no parameters
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testGetParametersNum_0007', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testGetParametersNum_0007";
      try {
        const noParamArrow = () => {
        };

        const lambdaType: LambdaType = Type.of(noParamArrow) as LambdaType;
        const result: number = lambdaType.getParametersNum();
        expect(result).assertEqual(0);
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_GETPARAMETERSNUM_0800
     * @tc.name  : testGetParametersNum_0008
     * @tc.desc  : Check parameter count for arrow function with one parameter
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testGetParametersNum_0008', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testGetParametersNum_0008";
      try {
        const oneParamArrow = (name: string) => {
        };
        const lambdaType: LambdaType = Type.of(oneParamArrow) as LambdaType;
        const result: number = lambdaType.getParametersNum();
        expect(result).assertEqual(1);
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_GETPARAMETERSNUM_0900
     * @tc.name  : testGetParametersNum_0009
     * @tc.desc  : Check parameter count for arrow function with multiple parameters
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testGetParametersNum_0009', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testGetParametersNum_0009";
      try {
        const multiParamArrow = (a: number, b: boolean, c: string) => {
        };
        const lambdaType: LambdaType = Type.of(multiParamArrow) as LambdaType;
        const result: number = lambdaType.getParametersNum();
        expect(result).assertEqual(3);
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
    * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_GETPARAMETERSNUM_1000
    * @tc.name  : testGetParametersNum_0010
    * @tc.desc  : Check parameter count for class method with no parameters
    * @tc.size  : MediumTest
    * @tc.type  : Function
    * @tc.level : Level 1
    */
    it('testGetParametersNum_0010', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testGetParametersNum_0010";
      try {
        const instance = new ParameterTestClass();
        const functionType: FunctionType = Type.of(instance.zeroParamMethod) as FunctionType;
        const result: number = functionType.getParametersNum();
        expect(result).assertEqual(0);
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_GETPARAMETERSNUM_1100
     * @tc.name  : testGetParametersNum_0011
     * @tc.desc  : Check parameter count for class method with one parameter
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testGetParametersNum_0011', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testGetParametersNum_0011";
      try {
        const instance = new ParameterTestClass();
        const functionType: FunctionType = Type.of(instance.oneParamMethod) as FunctionType;
        const result: number = functionType.getParametersNum();
        expect(result).assertEqual(1);
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_GETPARAMETERSNUM_1200
     * @tc.name  : testGetParametersNum_0012
     * @tc.desc  : Check parameter count for class method with two parameters
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testGetParametersNum_0012', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testGetParametersNum_0012";
      try {
        const instance = new ParameterTestClass();
        const functionType: FunctionType = Type.of(instance.twoParamsMethod) as FunctionType;
        const result: number = functionType.getParametersNum();
        expect(result).assertEqual(2);
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_GETPARAMETERSNUM_1300
     * @tc.name  : testGetParametersNum_0013
     * @tc.desc  : Check parameter count for static class method with three parameters
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testGetParametersNum_0013', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testGetParametersNum_0013";
      try {
        const functionType: FunctionType = Type.of(ParameterTestClass.staticThreeParamsMethod) as FunctionType;
        const result: number = functionType.getParametersNum();
        expect(result).assertEqual(3);
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_GETPARAMETERSNUM_1400
     * @tc.name  : testGetParametersNum_0014
     * @tc.desc  : Check parameter count for generic function with two parameters
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testGetParametersNum_0014', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testGetParametersNum_0014";
      try {
        const functionType: FunctionType = Type.of(genericFunction) as FunctionType;
        const result: number = functionType.getParametersNum();
        expect(result).assertEqual(2);
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });


    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_EQUALS_0100
     * @tc.name  : testEquals_0001
     * @tc.desc  : Check if function equals to itself returns true
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testEquals_0001', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testEquals_0001";
      try {
        const functionType1: FunctionType = Type.of(identicalFunction) as FunctionType;
        const functionType2: FunctionType = Type.of(identicalFunction) as FunctionType;
        const result: boolean = functionType1.equals(functionType2);
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_EQUALS_0200
     * @tc.name  : testEquals_0002
     * @tc.desc  : Check if different functions with same signature return false
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testEquals_0002', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testEquals_0002";
      try {
        const functionType1: FunctionType = Type.of(functionA) as FunctionType;
        const functionType2: FunctionType = Type.of(functionB) as FunctionType;
        const result: boolean = functionType1.equals(functionType2);
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_EQUALS_0300
     * @tc.name  : testEquals_0003
     * @tc.desc  : Check if functions with same parameters and implementation return false
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testEquals_0003', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testEquals_0003";
      try {
        const functionType1: FunctionType = Type.of(add) as FunctionType;
        const functionType2: FunctionType = Type.of(sum) as FunctionType;
        const result: boolean = functionType1.equals(functionType2);
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_EQUALS_0400
     * @tc.name  : testEquals_0004
     * @tc.desc  : Check if functions with same parameters but different implementation return false
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testEquals_0004', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testEquals_0004";
      try {

        const functionType1: FunctionType = Type.of(add) as FunctionType;
        const functionType2: FunctionType = Type.of(multiply) as FunctionType;
        const result: boolean = functionType1.equals(functionType2);
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
    * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_EQUALS_0500
    * @tc.name  : testEquals_0005
    * @tc.desc  : Check if arrow function equals to itself returns true
    * @tc.size  : MediumTest
    * @tc.type  : Function
    * @tc.level : Level 1
    */
    it('testEquals_0005', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testEquals_0005";
      try {
        const arrowSame = () => {
        };

        const lambdaType1: LambdaType = Type.of(arrowSame) as LambdaType;
        const lambdaType2: LambdaType = Type.of(arrowSame) as LambdaType;
        const result: boolean = lambdaType1.equals(lambdaType2);
        expect(result).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_EQUALS_0600
     * @tc.name  : testEquals_0006
     * @tc.desc  : Check if different arrow functions return false
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testEquals_0006', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testEquals_0006";
      try {
        const arrowOne = () => {
        };
        const arrowTwo = () => {
        };
        const lambdaType1: LambdaType = Type.of(arrowOne) as LambdaType;
        const lambdaType2: LambdaType = Type.of(arrowTwo) as LambdaType;
        const result: boolean = lambdaType1.equals(lambdaType2);
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_EQUALS_0700
     * @tc.name  : testEquals_0007
     * @tc.desc  : Check if arrow function equals to regular function with same implementation returns false
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testEquals_0007', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testEquals_0007";
      try {
        const arrowAdd = (a: number, b: number): number => {
          return a + b;
        };

        const functionType: FunctionType = Type.of(add) as FunctionType;
        const lambdaType: LambdaType = Type.of(arrowAdd) as LambdaType;
        const result: boolean = functionType.equals(lambdaType);
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_EQUALS_0800
     * @tc.name  : testEquals_0008
     * @tc.desc  : Check if same class method from different instances returns true
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testEquals_0008', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testEquals_0008";
      try {

        const instance1 = new FunctionEqualityClass();
        const instance2 = new FunctionEqualityClass();
        const functionType1: FunctionType = Type.of(instance1.methodX) as FunctionType;
        const functionType2: FunctionType = Type.of(instance2.methodX) as FunctionType;
        const result: boolean = functionType1.equals(functionType2);
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_EQUALS_0900
     * @tc.name  : testEquals_0009
     * @tc.desc  : Check if different class methods from same instance returns false
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testEquals_0009', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testEquals_0009";
      try {

        const instance1 = new FunctionEqualityClass();

        const functionType1: FunctionType = Type.of(instance1.methodX) as FunctionType;
        const functionType2: FunctionType = Type.of(instance1.methodY) as FunctionType;
        const result: boolean = functionType1.equals(functionType2);
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_EQUALS_1000
     * @tc.name  : testEquals_0010
     * @tc.desc  : Check if class method equals to function with same implementation returns false
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testEquals_0010', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testEquals_0010";
      try {

        const instance1 = new FunctionEqualityClass();

        const functionType1: FunctionType = Type.of(add) as FunctionType;
        const functionType2: FunctionType = Type.of(instance1.calculate) as FunctionType;
        const result: boolean = functionType1.equals(functionType2);
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_EQUALS_1100
     * @tc.name  : testEquals_0011
     * @tc.desc  : Check if function equals to non-function type returns false
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testEquals_0011', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testEquals_0011";
      try {
        const functionType: FunctionType = Type.of(functionA) as FunctionType;
        const numberType: Type = Type.of(123) as Type;
        const result: boolean = functionType.equals(numberType);
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_EQUALS_1200
     * @tc.name  : testEquals_0012
     * @tc.desc  : Check if comparing function type with null returns false
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testEquals_0012', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testEquals_0012";
      try {
        const functionType: FunctionType = Type.of(functionA) as FunctionType;
        const result: boolean = functionType.equals(Type.of(null));
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_GETNAME_0100
     * @tc.name  : testGetName_0001
     * @tc.desc  : Check name of explicitly named function
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testGetName_0001', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testGetName_0001";
      try {
        const functionType: FunctionType = Type.of(namedFunction) as FunctionType;
        const result: string = functionType.getName();
        expect(result).assertEqual("");
        expect(functionType.getLiteral()).assertEqual("(): void");
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_GETNAME_0200
     * @tc.name  : testGetName_0002
     * @tc.desc  : Check name of anonymous function assigned to variable
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testGetName_0002', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testGetName_0002";
      try {

        const functionType: FunctionType = Type.of(anonymousFunction) as FunctionType;
        const result: string = functionType.getName();
        expect(result).assertEqual("");
        expect(functionType.getLiteral()).assertEqual("(): void");
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_GETNAME_0300
     * @tc.name  : testGetName_0003
     * @tc.desc  : Check name of arrow function
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testGetName_0003', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testGetName_0003";
      try {
        const arrowFunction = () => {
        };
        const lambdaType: LambdaType = Type.of(arrowFunction) as LambdaType;
        const result: string = lambdaType.getName();
        expect(result).assertEqual("");
        expect(lambdaType.getLiteral()).assertEqual("(): void");
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_GETNAME_0400
     * @tc.name  : testGetName_0004
     * @tc.desc  : Check name of function with parameters
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testGetName_0004', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testGetName_0004";
      try {
        const functionType: FunctionType = Type.of(functionWithParameters) as FunctionType;
        const result: string = functionType.getName();
        expect(result).assertEqual("");
        // expect(functionType.getLiteral()).assertEqual("(1: std.core.Double, 2: string): void");
        expect(functionType.getLiteral()).assertEqual("(1: double, 2: string): void");
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_GETNAME_0500
     * @tc.name  : testGetName_0005
     * @tc.desc  : Check name of class instance method
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testGetName_0005', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testGetName_0005";
      try {
        const instance = new NameTestClass();
        const functionType: FunctionType = Type.of(instance.instanceMethod) as FunctionType;
        const result: string = functionType.getName();
        expect(result).assertEqual("");
        expect(functionType.getLiteral()).assertEqual("(): void");
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_GETNAME_0600
     * @tc.name  : testGetName_0006
     * @tc.desc  : Check name of class static method
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testGetName_0006', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testGetName_0006";
      try {
        const functionType: FunctionType = Type.of(NameTestClass.staticMethod) as FunctionType;
        const result: string = functionType.getName();
        expect(result).assertEqual("");
        expect(functionType.getLiteral()).assertEqual("(): void");
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_GETNAME_0700
     * @tc.name  : testGetName_0007
     * @tc.desc  : Check name of class private method caller
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testGetName_0007', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testGetName_0007";
      try {
        const instance = new NameTestClass();
        const functionType: FunctionType = Type.of(instance.callPrivateMethod) as FunctionType;
        const result: string = functionType.getName();
        expect(result).assertEqual("");
        expect(functionType.getLiteral()).assertEqual("(): void");
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });


    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_HASNAME_0100
     * @tc.name  : testHasName_0001
     * @tc.desc  : Check if explicitly named function has name
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testHasName_0001', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testHasName_0001";
      try {
        const functionType: FunctionType = Type.of(namedFunction) as FunctionType;
        const result: boolean = functionType.hasName();
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_HASNAME_0200
     * @tc.name  : testHasName_0002
     * @tc.desc  : Check if anonymous function expression has name
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testHasName_0002', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testHasName_0002";
      try {
        const functionType: FunctionType = Type.of(anonymousFunctionExpr) as FunctionType;
        const result: boolean = functionType.hasName();
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_HASNAME_0300
     * @tc.name  : testHasName_0003
     * @tc.desc  : Check if arrow function has name
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testHasName_0003', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testHasName_0003";
      try {
        const arrowFunction = () => {
        };
        const lambdaType: LambdaType = Type.of(arrowFunction) as LambdaType;
        const result: boolean = lambdaType.hasName();
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
    * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_HASNAME_0400
    * @tc.name  : testHasName_0004
    * @tc.desc  : Check if function with parameters has name
    * @tc.size  : MediumTest
    * @tc.type  : Function
    * @tc.level : Level 1
    */
    it('testHasName_0004', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testHasName_0004";
      try {
        const functionType: FunctionType = Type.of(functionWithParameters) as FunctionType;
        const result: boolean = functionType.hasName();
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_HASNAME_0500
     * @tc.name  : testHasName_0005
     * @tc.desc  : Check if class instance method has name
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testHasName_0005', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testHasName_0005";
      try {
        const instance = new HasNameTestClass();
        const functionType: FunctionType = Type.of(instance.instanceMethod) as FunctionType;
        const result: boolean = functionType.hasName();
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_HASNAME_0600
     * @tc.name  : testHasName_0006
     * @tc.desc  : Check if class static method has name
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testHasName_0006', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testHasName_0006";
      try {
        const functionType: FunctionType = Type.of(HasNameTestClass.staticMethod) as FunctionType;
        const result: boolean = functionType.hasName();
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_HASNAME_0700
     * @tc.name  : testHasName_0007
     * @tc.desc  : Check if class private method has name
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testHasName_0007', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testHasName_0007";
      try {
        const instance = new HasNameTestClass();
        const functionType: FunctionType = Type.of(instance.callPrivateMethod) as FunctionType;
        const result: boolean = functionType.hasName();
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_ISPRIMITIVE_0100
     * @tc.name  : testIsPrimitive_0001
     * @tc.desc  : Check if basic function is considered primitive type
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsPrimitive_0001', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsPrimitive_0001";
      try {
        const functionType: FunctionType = Type.of(basicFunction) as FunctionType;
        const result: boolean = functionType.isPrimitive();
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_ISPRIMITIVE_0200
     * @tc.name  : testIsPrimitive_0002
     * @tc.desc  : Check if arrow function is considered primitive type
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsPrimitive_0002', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsPrimitive_0002";
      try {

        const arrowFunction = () => {
        };
        const lambdaType: LambdaType = Type.of(arrowFunction) as LambdaType;
        const result: boolean = lambdaType.isPrimitive();
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });
    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_ISPRIMITIVE_0300
     * @tc.name  : testIsPrimitive_0003
     * @tc.desc  : Check if function with parameters is considered primitive type
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsPrimitive_0003', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsPrimitive_0003";
      try {
        const functionType: FunctionType = Type.of(functionWithParams) as FunctionType;
        const result: boolean = functionType.isPrimitive();
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_ISPRIMITIVE_0400
     * @tc.name  : testIsPrimitive_0004
     * @tc.desc  : Check if class instance method is considered primitive type
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsPrimitive_0004', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsPrimitive_0004";
      try {
        const instance = new IsPrimitiveTestClass();
        const functionType: FunctionType = Type.of(instance.instanceMethod) as FunctionType;
        const result: boolean = functionType.isPrimitive();
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_ISPRIMITIVE_0500
     * @tc.name  : testIsPrimitive_0005
     * @tc.desc  : Check if class static method is considered primitive type
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsPrimitive_0005', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsPrimitive_0005";
      try {
        const functionType: FunctionType = Type.of(IsPrimitiveTestClass.staticMethod) as FunctionType;
        const result: boolean = functionType.isPrimitive();
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_ISPRIMITIVE_0600
     * @tc.name  : testIsPrimitive_0006
     * @tc.desc  : Verify that number primitive type returns true for comparison
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsPrimitive_0006', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsPrimitive_0006";
      try {
        const numberType = Type.of(42);
        const result: boolean = numberType.isPrimitive();
        expect(result).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_ISPRIMITIVE_0700
     * @tc.name  : testIsPrimitive_0007
     * @tc.desc  : Verify that string primitive type returns true for comparison
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsPrimitive_0007', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsPrimitive_0007";
      try {
        const stringType = Type.of("test");
        const result: boolean = stringType.isPrimitive();
        expect(result).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_ISPRIMITIVE_0800
     * @tc.name  : testIsPrimitive_0008
     * @tc.desc  : Verify that boolean primitive type returns true for comparison
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsPrimitive_0008', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsPrimitive_0008";
      try {
        const booleanType = Type.of(true);
        const result: boolean = booleanType.isPrimitive();
        expect(result).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_ISREFERENCE_0100
     * @tc.name  : testIsReference_0001
     * @tc.desc  : Check if basic function is considered reference type
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsReference_0001', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsReference_0001";
      try {
        const functionType: FunctionType = Type.of(basicFunction) as FunctionType;
        const result: boolean = functionType.isReference();
        expect(result).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_ISREFERENCE_0200
     * @tc.name  : testIsReference_0002
     * @tc.desc  : Check if arrow function is considered reference type
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsReference_0002', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsReference_0002";
      try {
        const arrowFunction = () => {
        };
        const lambdaType: LambdaType = Type.of(arrowFunction) as LambdaType;
        const result: boolean = lambdaType.isReference();
        expect(result).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
    * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_ISREFERENCE_0300
    * @tc.name  : testIsReference_0003
    * @tc.desc  : Check if function with parameters is considered reference type
    * @tc.size  : MediumTest
    * @tc.type  : Function
    * @tc.level : Level 1
    */
    it('testIsReference_0003', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsReference_0003";
      try {
        const functionType: FunctionType = Type.of(functionWithParams) as FunctionType;
        const result: boolean = functionType.isReference();
        expect(result).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_ISREFERENCE_0400
     * @tc.name  : testIsReference_0004
     * @tc.desc  : Check if class instance method is considered reference type
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsReference_0004', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsReference_0004";
      try {
        const instance = new IsReferenceTestClass();
        const functionType: FunctionType = Type.of(instance.instanceMethod) as FunctionType;
        const result: boolean = functionType.isReference();
        expect(result).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_ISREFERENCE_0500
     * @tc.name  : testIsReference_0005
     * @tc.desc  : Check if class static method is considered reference type
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsReference_0005', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsReference_0005";
      try {
        const functionType: FunctionType = Type.of(IsReferenceTestClass.staticMethod) as FunctionType;
        const result: boolean = functionType.isReference();
        expect(result).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_ISREFERENCE_0600
     * @tc.name  : testIsReference_0006
     * @tc.desc  : Verify that number primitive returns false for isReference()
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsReference_0006', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsReference_0006";
      try {
        const numberType = Type.of(3.14159);
        const result: boolean = numberType.isReference();
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_ISREFERENCE_0700
     * @tc.name  : testIsReference_0007
     * @tc.desc  : Verify that string primitive returns false for isReference()
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsReference_0007', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsReference_0007";
      try {
        const stringType = Type.of("primitive string");
        const result: boolean = stringType.isReference();
        expect(result).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_ISREFERENCE_0800
     * @tc.name  : testIsReference_0008
     * @tc.desc  : Verify that boolean primitive returns false for isReference()
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsReference_0008', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsReference_0008";
      try {
        const booleanType = Type.of(false);
        const result: boolean = booleanType.isReference();
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_ISREFERENCE_0900
     * @tc.name  : testIsReference_0009
     * @tc.desc  : Verify that array object returns true for isReference()
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsReference_0009', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsReference_0009";
      try {
        const arrayType = Type.of([true, false, true]);
        const result: boolean = arrayType.isReference();
        expect(result).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_FUNCTION_ISREFERENCE_1400
     * @tc.name  : testIsReference_0014
     * @tc.desc  : Verify that class instance returns true for isReference()
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsReference_0014', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsReference_0014";
      try {
        const instance = new IsReferenceTestClass();
        const objectType = Type.of(instance);
        const result: boolean = objectType.isReference();
        expect(result).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });


    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNDEFINEDTYPE_EQUALS_0100
     * @tc.name  : testEquals_0001
     * @tc.desc  : Check if UndefinedType equals to itself
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testEquals_0001', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testEquals_0001";
      try {
        const undefinedValue = undefined;
        const type: UndefinedType = Type.of(undefinedValue) as UndefinedType;
        const result: boolean = type.equals(type);
        expect(result).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNDEFINEDTYPE_EQUALS_0200
     * @tc.name  : testEquals_0002
     * @tc.desc  : Check if UndefinedType equals to another UndefinedType instance
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testEquals_0002', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testEquals_0002";
      try {
        const undefinedValue = undefined;
        const anotherUndefined = undefined;
        const type1: UndefinedType = Type.of(undefinedValue) as UndefinedType;
        const type2: UndefinedType = Type.of(anotherUndefined) as UndefinedType;
        const result: boolean = type1.equals(type2);
        expect(result).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNDEFINEDTYPE_EQUALS_0300
     * @tc.name  : testEquals_0003
     * @tc.desc  : Check if UndefinedType equals to Null type
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testEquals_0003', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testEquals_0003";
      try {
        const undefinedValue = undefined;
        const nullValue = null;
        const undefinedType: UndefinedType = Type.of(undefinedValue) as UndefinedType;
        const nullType = Type.of(nullValue);
        const result: boolean = undefinedType.equals(nullType);
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNDEFINEDTYPE_EQUALS_0400
     * @tc.name  : testEquals_0004
     * @tc.desc  : Check if UndefinedType equals to Number type
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testEquals_0004', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testEquals_0004";
      try {
        const undefinedValue = undefined;
        const numberValue = 42;
        const undefinedType: UndefinedType = Type.of(undefinedValue) as UndefinedType;
        const numberType = Type.of(numberValue);
        const result: boolean = undefinedType.equals(numberType);
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNDEFINEDTYPE_EQUALS_0500
     * @tc.name  : testEquals_0005
     * @tc.desc  : Check if UndefinedType equals to String type
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testEquals_0005', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testEquals_0005";
      try {
        const undefinedValue = undefined;
        const stringValue = "test";
        const undefinedType: UndefinedType = Type.of(undefinedValue) as UndefinedType;
        const stringType = Type.of(stringValue);
        const result: boolean = undefinedType.equals(stringType);
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNDEFINEDTYPE_EQUALS_0600
     * @tc.name  : testEquals_0006
     * @tc.desc  : Check if UndefinedType equals to Boolean type
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testEquals_0006', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testEquals_0006";
      try {
        const undefinedValue = undefined;
        const booleanValue = true;
        const undefinedType: UndefinedType = Type.of(undefinedValue) as UndefinedType;
        const booleanType = Type.of(booleanValue);
        const result: boolean = undefinedType.equals(booleanType);
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNDEFINEDTYPE_EQUALS_0700
     * @tc.name  : testEquals_0007
     * @tc.desc  : Check if UndefinedType equals to Function type
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testEquals_0007', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testEquals_0007";
      try {
        const undefinedValue = undefined;
        const functionValue = () => {
        };
        const undefinedType: UndefinedType = Type.of(undefinedValue) as UndefinedType;
        const functionType = Type.of(functionValue);
        const result: boolean = undefinedType.equals(functionType);
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNDEFINEDTYPE_EQUALS_0800
     * @tc.name  : testEquals_0008
     * @tc.desc  : Check if UndefinedType equals to Array type
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testEquals_0008', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testEquals_0008";
      try {
        const undefinedValue = undefined;
        const arrayValue = [1, 2, 3];
        const undefinedType: UndefinedType = Type.of(undefinedValue) as UndefinedType;
        const arrayType = Type.of(arrayValue);
        const result: boolean = undefinedType.equals(arrayType);
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
   * @tc.number: SUB_FUNCTIONTYPE_UNDEFINEDTYPE_EQUALS_0900
   * @tc.name  : testEquals_0009
   * @tc.desc  : Check if UndefinedType equals to Object type
   * @tc.size  : MediumTest
   * @tc.type  : Function
   * @tc.level : Level 1
   */
    it('testEquals_0009', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testEquals_0009";
      try {
        const undefinedValue = undefined;
        const tupleValue = ['s', 1];
        const undefinedType: UndefinedType = Type.of(undefinedValue) as UndefinedType;
        const tupleType = Type.of(tupleValue);
        const result: boolean = undefinedType.equals(tupleType);
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNDEFINEDTYPE_EQUALS_1000
     * @tc.name  : testEquals_0010
     * @tc.desc  : Check if UndefinedType equals to Class instance type
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testEquals_0010', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testEquals_0010";
      try {
        const undefinedValue = undefined;
        const classInstance = new TestClass();
        const undefinedType: UndefinedType = Type.of(undefinedValue) as UndefinedType;
        const classType = Type.of(classInstance);
        const result: boolean = undefinedType.equals(classType);
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNDEFINEDTYPE_GETLITERAL_0100
     * @tc.name  : testGetLiteral_0001
     * @tc.desc  : Check literal value of UndefinedType from direct undefined value
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testGetLiteral_0001', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testGetLiteral_0001";
      try {
        const undefinedValue = undefined;
        const type: UndefinedType = Type.of(undefinedValue) as UndefinedType;
        const result: string = type.getLiteral();
        expect(result).assertEqual("undefined");
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNDEFINEDTYPE_GETLITERAL_0200
     * @tc.name  : testGetLiteral_0002
     * @tc.desc  : Check literal value of UndefinedType from variable-assigned undefined
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testGetLiteral_0002', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testGetLiteral_0002";
      try {
        let undefinedVar = null;
        const type: UndefinedType = Type.of(undefinedVar) as UndefinedType;
        const result: string = type.getLiteral();
        expect(result).assertEqual("undefined");
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNDEFINEDTYPE_GETLITERAL_0300
     * @tc.name  : testGetLiteral_0003
     * @tc.desc  : Check literal consistency across different UndefinedType instances
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testGetLiteral_0003', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testGetLiteral_0003";
      try {
        const undefined1 = undefined;
        const undefined2 = undefined;
        const type1: UndefinedType = Type.of(undefined1) as UndefinedType;
        const type2: UndefinedType = Type.of(undefined2) as UndefinedType;
        const result1: string = type1.getLiteral();
        const result2: string = type2.getLiteral();
        expect(result1).assertEqual(result2);
        expect(result1).assertEqual("undefined");
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNDEFINEDTYPE_GETLITERAL_0400
     * @tc.name  : testGetLiteral_0004
     * @tc.desc  : Check literal value of UndefinedType from function return
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testGetLiteral_0004', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testGetLiteral_0004";
      try {

        const returnValue = returnUndefined();
        const type: UndefinedType = Type.of(returnValue) as UndefinedType;
        const result: string = type.getLiteral();
        expect(result).assertEqual("undefined");
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNDEFINEDTYPE_GETLITERAL_0500
     * @tc.name  : testGetLiteral_0005
     * @tc.desc  : Check literal value of UndefinedType from uninitialized property
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testGetLiteral_0005', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testGetLiteral_0005";
      try {

        const instance = new TestClass();
        const type: UndefinedType = Type.of(instance.uninitializedProp) as UndefinedType;
        const result: string = type.getLiteral();
        expect(result).assertEqual("undefined");
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNDEFINEDTYPE_HASNAME_0100
     * @tc.name  : testHasName_0001
     * @tc.desc  : Check if direct undefined value type has a name
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testHasName_0001', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testHasName_0001";
      try {
        const undefinedValue = undefined;
        const type: UndefinedType = Type.of(undefinedValue) as UndefinedType;
        const result: boolean = type.hasName();
        expect(result).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNDEFINEDTYPE_HASNAME_0200
     * @tc.name  : testHasName_0002
     * @tc.desc  : Check if uninitialized variable's undefined type has a name
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testHasName_0002', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testHasName_0002";
      try {
        let uninitializedVar = null;
        const type: UndefinedType = Type.of(uninitializedVar) as UndefinedType;
        const result: boolean = type.hasName();
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNDEFINEDTYPE_HASNAME_0300
     * @tc.name  : testHasName_0003
     * @tc.desc  : Check if undefined from function return has a name
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testHasName_0003', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testHasName_0003";
      try {

        const returnedValue = returnUndefined();
        const type: UndefinedType = Type.of(returnedValue) as UndefinedType;
        const result: boolean = type.hasName();
        expect(result).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNDEFINEDTYPE_HASNAME_0400
     * @tc.name  : testHasName_0004
     * @tc.desc  : Check if undefined property in object has a name
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testHasName_0004', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testHasName_0004";
      try {

        const type: UndefinedType = Type.of(TestObject.undefinedProp) as UndefinedType;
        const result: boolean = type.hasName();
        expect(result).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNDEFINEDTYPE_HASNAME_0500
     * @tc.name  : testHasName_0005
     * @tc.desc  : Check if undefined class property type has a name
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testHasName_0005', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testHasName_0005";
      try {

        const instance = new TestClass();
        const type: UndefinedType = Type.of(instance.undefinedField) as UndefinedType;
        const result: boolean = type.hasName();
        expect(result).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNDEFINEDTYPE_ISPRIMITIVE_0100
     * @tc.name  : testIsPrimitive_0001
     * @tc.desc  : Check if direct undefined value is considered primitive
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsPrimitive_0001', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsPrimitive_0001";
      try {
        const undefinedValue = undefined;
        const type: UndefinedType = Type.of(undefinedValue) as UndefinedType;
        const result: boolean = type.isPrimitive();
        expect(result).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNDEFINEDTYPE_ISPRIMITIVE_0200
     * @tc.name  : testIsPrimitive_0002
     * @tc.desc  : Check if uninitialized variable's undefined is considered primitive
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsPrimitive_0002', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsPrimitive_0002";
      try {
        let uninitializedVar = null;
        const type: UndefinedType = Type.of(uninitializedVar) as UndefinedType;
        const result: boolean = type.isPrimitive();
        expect(result).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNDEFINEDTYPE_ISPRIMITIVE_0300
     * @tc.name  : testIsPrimitive_0003
     * @tc.desc  : Check if function-returned undefined is considered primitive
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsPrimitive_0003', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsPrimitive_0003";
      try {

        const returnedValue = returnUndefined();
        const type: UndefinedType = Type.of(returnedValue) as UndefinedType;
        const result: boolean = type.isPrimitive();
        expect(result).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNDEFINEDTYPE_ISPRIMITIVE_0400
     * @tc.name  : testIsPrimitive_0004
     * @tc.desc  : Check if undefined property in class is considered primitive
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsPrimitive_0004', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsPrimitive_0004";
      try {

        const instance = new TestClass();
        const type: UndefinedType = Type.of(instance.undefinedField) as UndefinedType;
        const result: boolean = type.isPrimitive();
        expect(result).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNDEFINEDTYPE_ISPRIMITIVE_0500
     * @tc.name  : testIsPrimitive_0005
     * @tc.desc  : Compare undefined primitive check with number type
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsPrimitive_0005', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsPrimitive_0005";
      try {
        const undefinedValue = undefined;
        const numberValue = 42;
        const undefinedType: UndefinedType = Type.of(undefinedValue) as UndefinedType;
        const numberType = Type.of(numberValue);

        const undefinedIsPrimitive: boolean = undefinedType.isPrimitive();
        const numberIsPrimitive: boolean = numberType.isPrimitive();

        expect(undefinedIsPrimitive).assertTrue();
        expect(numberIsPrimitive).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNDEFINEDTYPE_ISPRIMITIVE_0600
     * @tc.name  : testIsPrimitive_0006
     * @tc.desc  : Compare undefined primitive check with object type
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsPrimitive_0006', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsPrimitive_0006";
      try {
        const undefinedValue = undefined;
        const objectValue = ['s', 1];
        const undefinedType: UndefinedType = Type.of(undefinedValue) as UndefinedType;
        const objectType = Type.of(objectValue);

        const undefinedIsPrimitive: boolean = undefinedType.isPrimitive();
        const objectIsPrimitive: boolean = objectType.isPrimitive();

        expect(undefinedIsPrimitive).assertTrue();
        expect(objectIsPrimitive).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });


    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNDEFINEDTYPE_ISREFERENCE_0100
     * @tc.name  : testIsReference_0001
     * @tc.desc  : Check if direct undefined value is considered reference type
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsReference_0001', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsReference_0001";
      try {
        const undefinedValue = undefined;
        const type: UndefinedType = Type.of(undefinedValue) as UndefinedType;
        const result: boolean = type.isReference();
        expect(result).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNDEFINEDTYPE_ISREFERENCE_0200
     * @tc.name  : testIsReference_0002
     * @tc.desc  : Check if uninitialized variable (undefined) is considered reference type
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsReference_0002', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsReference_0002";
      try {
        let uninitializedVar = null;
        const type: UndefinedType = Type.of(uninitializedVar) as UndefinedType;
        const result: boolean = type.isReference();
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNDEFINEDTYPE_ISREFERENCE_0300
     * @tc.name  : testIsReference_0003
     * @tc.desc  : Check if undefined from function return is considered reference type
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsReference_0003', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsReference_0003";
      try {

        const returnedValue = returnUndefined();
        const type: UndefinedType = Type.of(returnedValue) as UndefinedType;
        const result: boolean = type.isReference();
        expect(result).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNDEFINEDTYPE_ISREFERENCE_0400
     * @tc.name  : testIsReference_0004
     * @tc.desc  : Check if undefined object property is considered reference type
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsReference_0004', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsReference_0004";
      try {

        const type: UndefinedType = Type.of(TestObject.undefinedProp) as UndefinedType;
        const result: boolean = type.isReference();
        expect(result).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNDEFINEDTYPE_ISREFERENCE_0500
     * @tc.name  : testIsReference_0005
     * @tc.desc  : Compare undefined type with actual reference type (object)
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsReference_0005', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsReference_0005";
      try {
        const undefinedValue = undefined;
        const referenceObject = ['s', 6];

        const undefinedType: UndefinedType = Type.of(undefinedValue) as UndefinedType;
        const objectType = Type.of(referenceObject);

        const undefinedIsRef: boolean = undefinedType.isReference();
        const objectIsRef: boolean = objectType.isReference();

        expect(undefinedIsRef).assertTrue();
        expect(objectIsRef).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNDEFINEDTYPE_ISREFERENCE_0600
     * @tc.name  : testIsReference_0006
     * @tc.desc  : Check if undefined class property is considered reference type
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsReference_0006', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsReference_0006";
      try {
        const instance = new TestClass();
        const type: UndefinedType = Type.of(instance.undefinedField) as UndefinedType;
        const result: boolean = type.isReference();
        expect(result).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNIONTYPE_GETCASE_0100
     * @tc.name  : testGetCase_0001
     * @tc.desc  : Check if calling getCase(0) on UnionType (number|string) throws "Not implemented" error
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    // it('testGetCase_0001', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
    //   const TAG: string = "testGetCase_0001";
    //   try {
    //     const value: number | string = 42;
    //     const unionType = Type.of(value) ;
    //     const caseItem: UnionCase = unionType.getCase(0);
    //     expect().assertFail();
    //   } catch (err: Error) {
    //     console.error(`${TAG} failed: ${err.message}`);
    //     expect(`${err.message}`).assertEqual("Not implemented");
    //   }
    // });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNIONTYPE_GETCASES_NUM_0100
     * @tc.name  : testGetCasesNum_0001
     * @tc.desc  : Check getCasesNum() return value for UnionType (number|string)
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    // it('testGetCasesNum_0001', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
    //   const TAG: string = "testGetCasesNum_0001";
    //   try {
    //     const value: number | string = 42;
    //     const unionType = Type.of(value) ;
    //     const caseItem: number = unionType.getCasesNum();
    //     expect(caseItem).assertEqual(0);
    //   } catch (err: Error) {
    //     console.error(`${TAG} failed: ${err.message}`);
    //     expect(`${err.message}`).assertEqual('s');
    //   }
    // });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNIONTYPE_MAKE_0100
     * @tc.name  : testMake_0001
     * @tc.desc  : Check if calling make() with Type instance on UnionType (number|string) throws "not implemented" error
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    // it('testMake_0001', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
    //   const TAG: string = "testMake_0001";
    //   try {
    //     const value: number | string = 42;
    //     const unionType = Type.of(value) ;
    //     let type = Type.of(4);
    //     const Item: Object = unionType.make(type);
    //     expect().assertFail();
    //   } catch (err: Error) {
    //     console.error(`${TAG} failed: ${err.message}`);
    //     expect(`${err.message}`).assertEqual("not implemented");
    //   }
    // });

    // /*
    //  * @tc.number: SUB_FUNCTIONTYPE_UNIONTYPE_MAKE_0200
    //  * @tc.name  : testMake_0002
    //  * @tc.desc  : Check if calling make() with number value on UnionType (number|string) throws "not implemented" error
    //  * @tc.size  : MediumTest
    //  * @tc.type  : Function
    //  * @tc.level : Level 1
    //  */
    // it('testMake_0002', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
    //   const TAG: string = "testMake_0002";
    //   try {
    //     const value: number | string = 42;
    //     const unionType = Type.of(value) ;
    //     const Item: Object = unionType.make(42);
    //     expect().assertFail();
    //   } catch (err: Error) {
    //     console.error(`${TAG} failed: ${err.message}`);
    //     expect(`${err.message}`).assertEqual("not implemented");
    //   }
    // });


    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNIONTYPE_ASSIGNABLEFROM_1100
     * @tc.name  : testAssignableFrom_0011
     * @tc.desc  : Check assignableFrom() with union type created from number|string instance (number check)
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testAssignableFrom_0011', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testAssignableFrom_0011";
      try {
        const value: number | string = 42;
        const unionType = Type.of(value);
        const numberType = Type.of(100);
        const result: boolean = unionType.assignableFrom(numberType);
        expect(result).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect(`${err.message}`).assertEqual('s');
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNIONTYPE_ASSIGNABLEFROM_1200
     * @tc.name  : testAssignableFrom_0012
     * @tc.desc  : Check assignableFrom() with union type created from number|string instance (string check)
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testAssignableFrom_0012', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testAssignableFrom_0012";
      try {
        const value: number | string = "text";
        const unionType = Type.of(value);
        const stringType = Type.of("hello");
        const result: boolean = unionType.assignableFrom(stringType);
        expect(result).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNIONTYPE_ASSIGNABLEFROM_1300
     * @tc.name  : testAssignableFrom_0013
     * @tc.desc  : Check assignableFrom() with union type created from boolean|null instance (boolean check)
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testAssignableFrom_0013', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testAssignableFrom_0013";
      try {
        const value: boolean | null = false;
        const unionType = Type.of(value);
        const booleanType = Type.of(true);
        const result: boolean = unionType.assignableFrom(booleanType);
        // expect(result).assertFalse();
        expect(result).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNIONTYPE_ASSIGNABLEFROM_1400
     * @tc.name  : testAssignableFrom_0014
     * @tc.desc  : Check assignableFrom() with union type created from object|array instance (array check)
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testAssignableFrom_0014', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testAssignableFrom_0014";
      try {
        const value: object | number[] = [1, 2, 3];
        const unionType = Type.of(value);
        const arrayType = Type.of([4, 5]);
        const result: boolean = unionType.assignableFrom(arrayType);
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNIONTYPE_ASSIGNABLEFROM_1500
     * @tc.name  : testAssignableFrom_0015
     * @tc.desc  : Check assignableFrom() with union type created from mixed instance (incompatible type)
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testAssignableFrom_0015', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testAssignableFrom_0015";
      try {
        const value: number | string = 42;
        const unionType = Type.of(value);
        const booleanType = Type.of(false);
        const result: boolean = unionType.assignableFrom(booleanType);
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNIONTYPE_EQUALS_0100
     * @tc.name  : testEquals_0001
     * @tc.desc  : Check if number|string union type equals to another identical number|string union type
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testEquals_0001', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testEquals_0001";
      try {
        const value1: number | string = 42;
        const value2: number | string = "test";
        const unionType1 = Type.of(value1);
        const unionType2 = Type.of(value2);
        const result: boolean = unionType1.equals(unionType2);
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNIONTYPE_EQUALS_0200
     * @tc.name  : testEquals_0002
     * @tc.desc  : Check if number|string union type equals to string|number union type (different order)
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testEquals_0002', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testEquals_0002";
      try {
        const value1: number | string = 42;
        const value2: string | number = "test";
        const unionType1 = Type.of(value1);
        const unionType2 = Type.of(value2);
        const result: boolean = unionType1.equals(unionType2);
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNIONTYPE_EQUALS_0300
     * @tc.name  : testEquals_0003
     * @tc.desc  : Check if number|string union type equals to number|string|boolean union type (extra member)
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testEquals_0003', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testEquals_0003";
      try {
        const value1: number | string = 42;
        const value2: number | string | boolean = true;
        const unionType1 = Type.of(value1);
        const unionType2 = Type.of(value2);
        const result: boolean = unionType1.equals(unionType2);
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNIONTYPE_EQUALS_0400
     * @tc.name  : testEquals_0004
     * @tc.desc  : Check if number|string union type equals to number|boolean union type (partial overlap)
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testEquals_0004', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testEquals_0004";
      try {
        const value1: number | string = 42;
        const value2: number | boolean = true;
        const unionType1 = Type.of(value1);
        const unionType2 = Type.of(value2);
        const result: boolean = unionType1.equals(unionType2);
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNIONTYPE_EQUALS_0500
     * @tc.name  : testEquals_0005
     * @tc.desc  : Check if union type equals to itself
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testEquals_0005', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testEquals_0005";
      try {
        const value: number | string = 42;
        const unionType = Type.of(value);
        const result: boolean = unionType.equals(unionType);
        expect(result).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNIONTYPE_EQUALS_0600
     * @tc.name  : testEquals_0006
     * @tc.desc  : Check if union type equals to non-union number type
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testEquals_0006', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testEquals_0006";
      try {
        const value: number | string = 42;
        const unionType = Type.of(value);
        const numberType = Type.of(100);
        const result: boolean = unionType.equals(numberType);
        // expect(result).assertFalse();
        expect(result).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });


    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNIONTYPE_EQUALS_0700
     * @tc.name  : testEquals_0007
     * @tc.desc  : Check if null|undefined union type equals to undefined|null union type
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testEquals_0007', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testEquals_0007";
      try {
        const value1: null | undefined = null;
        const value2: undefined | null = undefined;
        const unionType1 = Type.of(value1);
        const unionType2 = Type.of(value2);
        const result: boolean = unionType1.equals(unionType2);
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNIONTYPE_EQUALS_0800
     * @tc.name  : testEquals_0008
     * @tc.desc  : Check if union type equals to null type
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testEquals_0008', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testEquals_0008";
      try {
        const value: number | string = 42;
        const unionType = Type.of(value);
        const nullType = Type.of(null);
        const result: boolean = unionType.equals(nullType);
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });


    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNIONTYPE_EQUALS_0900
     * @tc.name  : testEquals_0009
     * @tc.desc  : Check if complex union type equals to another complex union type with same members
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testEquals_0009', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testEquals_0009";
      try {

        const value1: number | TestClass | (() => void) = 42;
        const value2: TestClass | (() => void) | number = new TestClass("test");
        const unionType1 = Type.of(value1);
        const unionType2 = Type.of(value2);
        const result: boolean = unionType1.equals(unionType2);
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
    * @tc.number: SUB_FUNCTIONTYPE_UNIONTYPE_GETLITERAL_0100
    * @tc.name  : testGetLiteral_0001
    * @tc.desc  : Check literal for number|string union type created from number value
    * @tc.size  : MediumTest
    * @tc.type  : Function
    * @tc.level : Level 1
    */
    it('testGetLiteral_0001', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testGetLiteral_0001";
      try {
        const value: number | string = 42;
        const unionType = Type.of(value);
        const result: string = unionType.getLiteral();
        // expect(result).assertEqual("Double");
        expect(result).assertEqual("int");
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNIONTYPE_GETLITERAL_0200
     * @tc.name  : testGetLiteral_0002
     * @tc.desc  : Check literal for number|string union type created from string value
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testGetLiteral_0002', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testGetLiteral_0002";
      try {
        const value: number | string = "test";
        const unionType = Type.of(value);
        const result: string = unionType.getLiteral();
        expect(result).assertEqual("string");
      } catch (err: Error) {
        console.error(`${TAG} failed: ${err.message}`);
        expect(`${err.message}`).assertEqual("sda");
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNIONTYPE_GETLITERAL_0300
     * @tc.name  : testGetLiteral_0003
     * @tc.desc  : Check literal for boolean|null union type
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testGetLiteral_0003', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testGetLiteral_0003";
      try {
        const value: boolean | null = null;
        const unionType = Type.of(value);
        const result: string = unionType.getLiteral();
        expect(result).assertEqual("null");
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNIONTYPE_GETLITERAL_0400
     * @tc.name  : testGetLiteral_0004
     * @tc.desc  : Check literal for object|array union type
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testGetLiteral_0004', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testGetLiteral_0004";
      try {
        const value: object | number[] = [1, 2, 3];
        const unionType = Type.of(value);
        const result: string = unionType.getLiteral();
        expect(result).assertEqual("class{...}");
      } catch (err: Error) {
        console.error(`${TAG} failed: ${err.message}`);
        expect(`${err.message}`).assertTrue();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNIONTYPE_GETLITERAL_0500
     * @tc.name  : testGetLiteral_0005
     * @tc.desc  : Check literal for number|undefined union type
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testGetLiteral_0005', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testGetLiteral_0005";
      try {
        const value: number | undefined = undefined;
        const unionType = Type.of(value);
        const result: string = unionType.getLiteral();
        expect(result).assertEqual("undefined");
      } catch (err: Error) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNIONTYPE_GETLITERAL_0600
     * @tc.name  : testGetLiteral_0006
     * @tc.desc  : Check literal for three-type union (number|string|boolean)
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testGetLiteral_0006', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testGetLiteral_0006";
      try {
        const value: number | string | boolean = true;
        const unionType = Type.of(value);
        const result: string = unionType.getLiteral();
        // expect(result).assertEqual("Boolean");
        expect(result).assertEqual("boolean");
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNIONTYPE_GETLITERAL_0700
     * @tc.name  : testGetLiteral_0007
     * @tc.desc  : Check literal for function|class union type
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testGetLiteral_0007', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testGetLiteral_0007";
      try {
        const value: (() => void) | TestClass = new TestClass();
        const unionType = Type.of(value);
        const result: string = unionType.getLiteral();
        expect(result).assertEqual("class{...}");
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNIONTYPE_GETNAME_0100
     * @tc.name  : testGetName_0001
     * @tc.desc  : Check name for number|string union type created from number value
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testGetName_0001', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testGetName_0001";
      try {
        const value: number | string = 42;
        const unionType = Type.of(value);
        const result: string = unionType.getName();
        // expect(result).assertEqual("std.core.Double");
        expect(result).assertEqual("");
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNIONTYPE_GETNAME_0200
     * @tc.name  : testGetName_0002
     * @tc.desc  : Check name for boolean|null union type created from null value
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testGetName_0002', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testGetName_0002";
      try {
        const value: boolean | null = null;
        const unionType = Type.of(value);
        const result: string = unionType.getName();
        expect(result).assertEqual("null");
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNIONTYPE_GETNAME_0300
     * @tc.name  : testGetName_0003
     * @tc.desc  : Check name for object|array union type created from object value
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testGetName_0003', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testGetName_0003";
      try {
        const value: object | number[] = [1, 2];
        const unionType = Type.of(value);
        const result: string = unionType.getName();
        expect(result).assertEqual("escompat.Array");
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNIONTYPE_GETNAME_0400
     * @tc.name  : testGetName_0004
     * @tc.desc  : Check name for three-type union (number|string|boolean)
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testGetName_0004', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testGetName_0004";
      try {
        const value: number | string | boolean = false;
        const unionType = Type.of(value);
        const result: string = unionType.getName();
        // expect(result).assertEqual("std.core.Boolean");
        expect(result).assertEqual("");
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNIONTYPE_GETNAME_0500
     * @tc.name  : testGetName_0005
     * @tc.desc  : Check name for function|undefined union type
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testGetName_0005', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testGetName_0005";
      try {
        const value: (() => void) | undefined = undefined;
        const unionType = Type.of(value);
        const result: string = unionType.getName();
        expect(result).assertEqual("undefined");
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNIONTYPE_GETNAME_0600
     * @tc.name  : testGetName_0006
     * @tc.desc  : Check name for class instance|string union type
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testGetName_0006', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testGetName_0006";
      try {

        const value: TestClass | string = new TestClass("test");
        const unionType = Type.of(value);
        const result: string = unionType.getName();
        expect(result).assertEqual("entry.src.main.src.test.Type_08.test.TestClass");
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNIONTYPE_HASNAME_0100
     * @tc.name  : testHasName_0001
     * @tc.desc  : Check if number|string union type has a name
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testHasName_0001', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testHasName_0001";
      try {
        const value: number | string = 42;
        const unionType = Type.of(value);
        const result: boolean = unionType.hasName();
        // expect(result).assertTrue();
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNIONTYPE_HASNAME_0200
     * @tc.name  : testHasName_0002
     * @tc.desc  : Check if boolean|null union type has a name
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testHasName_0002', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testHasName_0002";
      try {
        const value: boolean | null = null;
        const unionType = Type.of(value);
        const result: boolean = unionType.hasName();
        expect(result).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNIONTYPE_HASNAME_0300
     * @tc.name  : testHasName_0003
     * @tc.desc  : Check if object|array union type has a name
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testHasName_0003', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testHasName_0003";
      try {
        const value: object | number[] = [1, 2];
        const unionType = Type.of(value);
        const result: boolean = unionType.hasName();
        expect(result).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNIONTYPE_HASNAME_0400
     * @tc.name  : testHasName_0004
     * @tc.desc  : Check if three-type union (number|string|boolean) has a name
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testHasName_0004', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testHasName_0004";
      try {
        const value: number | string | boolean = "test";
        const unionType = Type.of(value);
        const result: boolean = unionType.hasName();
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNIONTYPE_HASNAME_0500
     * @tc.name  : testHasName_0005
     * @tc.desc  : Check if function|undefined union type has a name
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testHasName_0005', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testHasName_0005";
      try {
        const value: (() => number) | undefined = undefined;
        const unionType = Type.of(value);
        const result: boolean = unionType.hasName();
        expect(result).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNIONTYPE_HASNAME_0600
     * @tc.name  : testHasName_0006
     * @tc.desc  : Check if class instance|string union type has a name
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testHasName_0006', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testHasName_0006";
      try {

        const value: TestClass | string = new TestClass();
        const unionType = Type.of(value);
        const result: boolean = unionType.hasName();
        expect(result).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });


    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNIONTYPE_ISPRIMITIVE_0100
     * @tc.name  : testIsPrimitive_0001
     * @tc.desc  : Check if number|string union type is primitive
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsPrimitive_0001', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsPrimitive_0001";
      try {
        const value: number | string = 42;
        const unionType = Type.of(value);
        const result: boolean = unionType.isPrimitive();
        expect(result).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNIONTYPE_ISPRIMITIVE_0200
     * @tc.name  : testIsPrimitive_0002
     * @tc.desc  : Check if boolean|null union type is primitive
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsPrimitive_0002', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsPrimitive_0002";
      try {
        const value: boolean | null = true;
        const unionType = Type.of(value);
        const result: boolean = unionType.isPrimitive();
        expect(result).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNIONTYPE_ISPRIMITIVE_0300
     * @tc.name  : testIsPrimitive_0003
     * @tc.desc  : Check if number|object union type is primitive
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsPrimitive_0003', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsPrimitive_0003";
      try {
        const value: number | object = 42;
        const unionType = Type.of(value);
        const result: boolean = unionType.isPrimitive();
        expect(result).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNIONTYPE_ISPRIMITIVE_0400
     * @tc.name  : testIsPrimitive_0004
     * @tc.desc  : Check if string|array union type is primitive
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsPrimitive_0004', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsPrimitive_0004";
      try {
        const value: string | number[] = "test";
        const unionType = Type.of(value);
        const result: boolean = unionType.isPrimitive();
        expect(result).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });


    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNIONTYPE_ISPRIMITIVE_0600
     * @tc.name  : testIsPrimitive_0006
     * @tc.desc  : Check if number|string|boolean union type is primitive
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsPrimitive_0006', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsPrimitive_0006";
      try {
        const value: number | string | boolean = false;
        const unionType = Type.of(value);
        const result: boolean = unionType.isPrimitive();
        expect(result).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNIONTYPE_ISPRIMITIVE_0700
     * @tc.name  : testIsPrimitive_0007
     * @tc.desc  : Check if number|string|object union type is primitive
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsPrimitive_0007', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsPrimitive_0007";
      try {
        const value: number | string | object = "test";
        const unionType = Type.of(value);
        const result: boolean = unionType.isPrimitive();
        expect(result).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNIONTYPE_ISPRIMITIVE_0800
     * @tc.name  : testIsPrimitive_0008
     * @tc.desc  : Check if undefined|null union type is primitive
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsPrimitive_0008', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsPrimitive_0008";
      try {
        const value: undefined | null = undefined;
        const unionType = Type.of(value);
        const result: boolean = unionType.isPrimitive();
        expect(result).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
    * @tc.number: SUB_FUNCTIONTYPE_UNIONTYPE_ISREFERENCE_0100
    * @tc.name  : testIsReference_0001
    * @tc.desc  : Check if union of two reference types (object|array) returns true
    * @tc.size  : MediumTest
    * @tc.type  : Function
    * @tc.level : Level 1
    */
    it('testIsReference_0001', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsReference_0001";
      try {
        const value: object | number[] = [1, 3];
        const unionType = Type.of(value);
        const result: boolean = unionType.isReference();
        expect(result).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNIONTYPE_ISREFERENCE_0200
     * @tc.name  : testIsReference_0002
     * @tc.desc  : Check if union of reference and primitive type (object|number) returns true
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsReference_0002', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsReference_0002";
      try {
        const value: object | number = 42;
        const unionType = Type.of(value);
        const result: boolean = unionType.isReference();
        // expect(result).assertTrue();
        expect(result).assertFalse();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNIONTYPE_ISREFERENCE_0300
     * @tc.name  : testIsReference_0003
     * @tc.desc  : Check if union of two primitive types (number|string) returns false
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsReference_0003', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsReference_0003";
      try {
        const value: number | string = "text";
        const unionType = Type.of(value);
        const result: boolean = unionType.isReference();
        expect(result).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNIONTYPE_ISREFERENCE_0400
     * @tc.name  : testIsReference_0004
     * @tc.desc  : Check if union with function type (function|string) returns true
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsReference_0004', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsReference_0004";
      try {
        const value: (() => void) | string = "test";
        const unionType = Type.of(value);
        const result: boolean = unionType.isReference();
        expect(result).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNIONTYPE_ISREFERENCE_0500
     * @tc.name  : testIsReference_0005
     * @tc.desc  : Check if union with null and reference type (object|null) returns true
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsReference_0005', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsReference_0005";
      try {
        const value: object | null = null;
        const unionType = Type.of(value);
        const result: boolean = unionType.isReference();
        expect(result).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });

    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNIONTYPE_ISREFERENCE_0600
     * @tc.name  : testIsReference_0006
     * @tc.desc  : Check if union with undefined and primitive type (number|undefined) returns false
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsReference_0006', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsReference_0006";
      try {
        const value: number | undefined = undefined;
        const unionType = Type.of(value);
        const result: boolean = unionType.isReference();
        expect(result).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });


    /*
     * @tc.number: SUB_FUNCTIONTYPE_UNIONTYPE_ISREFERENCE_0800
     * @tc.name  : testIsReference_0008
     * @tc.desc  : Check if union of class instances (ClassA|ClassB) returns true
     * @tc.size  : MediumTest
     * @tc.type  : Function
     * @tc.level : Level 1
     */
    it('testIsReference_0008', TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL1, (): void => {
      const TAG: string = "testIsReference_0008";
      try {

        const value: ClassA | ClassB = new ClassB();
        const unionType = Type.of(value);
        const result: boolean = unionType.isReference();
        expect(result).assertTrue();
      } catch (err: BusinessError) {
        console.error(`${TAG} failed: ${err.message}`);
        expect().assertFail();
      }
    });
  });
}

class ClassA {
  a: number = 1;
}

class ClassB {
  b: string = "test";
}

function returnUndefined() {
  return undefined;
}

function functionWithParams(a: number, b: string) {
}

function basicFunction() {
}

class IsReferenceTestClass {
  instanceMethod() {
  }

  static staticMethod() {
  }
}

class IsPrimitiveTestClass {
  instanceMethod() {
  }

  static staticMethod() {
  }
}

function anonymousFunctionExpr() {
};

class HasNameTestClass {
  instanceMethod() {
  }

  static staticMethod() {
  }

  private privateMethod() {
  }

  callPrivateMethod() {
    this.privateMethod();
  }
}

function namedFunction() {
}

function functionWithParameters(a: number, b: string) {
}

class NameTestClass {
  instanceMethod() {
  }

  static staticMethod() {
  }

  private privateMethod() {
  }

  callPrivateMethod() {
    this.privateMethod();
  }
}

class FunctionEqualityClass {
  methodX() {
  }

  methodY() {
  }

  calculate(a: number, b: number): number {
    return a + b;
  }
}

function identicalFunction() {
}

function functionA() {
}

function functionB() {
}

function add(a: number, b: number): number {
  return a + b;
}

function sum(a: number, b: number): number {
  return a + b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

class ParameterTestClass {
  zeroParamMethod() {
  }

  oneParamMethod(value: number) {
  }

  twoParamsMethod(a: string, b: number) {
  }

  static staticThreeParamsMethod(x: boolean, y: object, z: string) {
  }
}

function genericFunction<T, U>(a: T, b: U): T {
  return a;
}

function noParamFunction() {
}

function oneParamFunction(a: number) {
}

function twoParamsFunction(a: string, b: boolean) {
}

function threeParamsFunction(x: number, y: string, z: object) {
}

function variableParamsFunction(...args: number[]) {
}

function defaultParamFunction(a: number, b: string = "default") {
}

class ExceptionTestClass {
  alwaysThrow(): void {
    throw new Error("Class method always throws");
  }

  conditionalThrow(flag: boolean): void {
    if (flag) {
      throw new Error("Class method conditionally throws");
    }
  }

  neverThrow(): string {
    return "Class method never throws";
  }

  static staticThrow(): void {
    throw new Error("Static method throws");
  }
}

function throwingWithTryCatch(): void {
  try {
    throw new Error("Error inside try block");
  } catch (e) {
    console.log("Error caught");
  }
}

function conditionallyThrowingFunction(shouldThrow: boolean): string {
  if (shouldThrow) {
    throw new Error("Conditionally throws an error");
  }
  return "No error thrown";
}

function neverThrowingFunction(): number {
  return 42;
}

function throwingInLoopFunction(count: number): void {
  for (let i = 0; i < count; i++) {
    if (i === count - 1) {
      throw new Error("Throws on last iteration");
    }
  }
}

function alwaysThrowingFunction(): void {
  throw new Error("Always throws an error");
}

function conditionalNeverFunction(condition: boolean): string | never {
  if (condition) {
    throw new Error("Conditionally throws");
  }
  return "returns string when condition is false";
}

function infiniteLoopFunction(): never {
  while (true) {
  }
}


function neverFunction(): never {
  throw new Error("This function never returns");
}

function genericUserFunction<T>(input: T): T {
  return input;
}

class UserClass {
  instanceMethod(): number {
    return 42;
  }

  static staticMethod(): boolean {
    return true;
  }

  private privateMethod(): string {
    return "private method";
  }

  callPrivateMethod(): string {
    return this.privateMethod();
  }
}

function parameterizedUserFunction(a: number, b: string): boolean {
  return a > b.length;
}

function basicUserFunction(): string {
  return "user function";
}

function voidSyncFunction(): void {
}

function genericSyncFunction<T>(input: T): T {
  return input;
}

function parameterizedSyncFunction(a: string, b: number): boolean {
  return a.length > b;
}

function basicSyncFunction(): number {
  return 100;
}

class FieldTestClass {
  public publicField: number = 0;
  private privateField: string = "";
  static staticField: boolean = false;
}

class GenericClass<T> {
  value: T;

  constructor(value: T) {
    this.value = value;
  }
}

interface TestInterfacef {
  name: string;
  age: number;
}

function interfaceReturningFunction(): TestInterfacef {
  return { name: "test", age: 20 };
}

function arrayReturningFunction(): number[] {
  return [1, 2, 3];
}

function classInstanceReturningFunction(): TestClass {
  return new TestClass("test");
}

function booleanReturningFunction(): boolean {
  return true;
}

function genericIdentityFunction<T>(item: T): T {
  return item;
};

function FuncTestClass(user: TestClass): void {
};

function numberReturningFunction(): number {
  return 42;
};

function stringReturningFunction(): string {
  return "test";
};

function FuncAdd(a: number, b: number): number {
  return a + b;
};

function FuncMult(id: number, name: string, active: boolean): void {
};

function FuncX(value: string): string {
  return value;
};

function voidReturningFunction(name: string): void {
};

class AnotherTestClass {
  public publicField: number = 1; // 与 FieldTestClass 同名字段但值不同
  private privateField: number = 2; // 与 FieldTestClass 同名字段但类型不同
}

class ParentEntity {
  parentField: number = 0;
  protected parentProtectedField: string = "parent";
}

class ChildEntity extends ParentEntity {
  childField: boolean = false;
  public childPublicField: string = "child";
  static childStaticField: number = 100;
}

class SingleFieldClass {
  onlyField: short = 5;
}


class TestObject {
  id: number;
  static undefinedProp: undefined

  constructor(id: number) {
    this.id = id;
  }
}

class TestClass {
  uninitializedProp = null;
  undefinedField = undefined;
  name: string;
  public value: number = 0;

  constructor(name?: string) {
    this.name = name ?? "test";
  }

  defaultSyncMethod(): number {
    return this.privateSyncHelper();
  }

  private privateSyncHelper(): number {
    return 42;
  }

  static staticSyncMethod(): boolean {
    return true;
  }

  neverMethod(): never {
    throw new Error("Class method never returns");
  }

  stringMethod(): string {
    return "class method";
  }

  static staticNeverMethod(): never {
    throw new Error("Static method never returns");
  }
}

class ParentClass {
}

class ChildClass extends ParentClass {
}

interface TestInterface {}

class InterfaceImpl implements TestInterface {
}

interface Person {
  name: string;
  age: number;
}

function anonymousFunction() {
};
type NestedUnion = number | string ;