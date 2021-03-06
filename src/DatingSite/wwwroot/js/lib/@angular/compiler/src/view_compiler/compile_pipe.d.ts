import { CompilePipeMetadata } from '../compile_metadata';
import * as o from '../output/output_ast';
import { CompileView } from './compile_view';
export declare class CompilePipe {
    view: CompileView;
    meta: CompilePipeMetadata;
    static call(view: CompileView, name: string, args: o.Expression[]): o.Expression;
    instance: o.ReadPropExpr;
    private _purePipeProxies;
    constructor(view: CompileView, meta: CompilePipeMetadata);
    pure: boolean;
    create(): void;
    private _call(callingView, args);
}
