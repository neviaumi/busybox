import type { Type } from '@angular/core';
import { TestBed, TestModuleMetadata } from '@angular/core/testing';

export function createTestBed<T>(comp: Type<T>, moduleDef: TestModuleMetadata) {
  return {
    setupTest: async () => {
      await TestBed.configureTestingModule(moduleDef).compileComponents();
      const fixture = TestBed.createComponent(comp);
      const component = fixture.componentInstance;
      fixture.detectChanges();
      return { component, fixture };
    },
  };
}
