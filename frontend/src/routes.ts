// frontend/src/routes.ts
import { lazy } from 'react';

export interface RouteDef {
  path: string;
  name: string;
  component: React.LazyExoticComponent<React.ComponentType<any>>;
}

function wrapLazy(importPromise: Promise<any>) {
  return importPromise.then((mod) => ({ default: mod.default }));
}

export const routes: RouteDef[] = [
  {
    path: '/',
    name: 'Dashboard',
    component: lazy(() => wrapLazy(import('./pages/Dashboard'))),
  },
  {
    path: '/scenarios',
    name: 'Scenario Library',
    component: lazy(() =>
      wrapLazy(import('./pages/ScenarioLibrary'))
    ),
  },
  {
    path: '/builder',
    name: 'Scenario Builder',
    component: lazy(() =>
      wrapLazy(import('./pages/ScenarioBuilder'))
    ),
  },
  {
    path: '/live',
    name: 'Live Execution',
    component: lazy(() =>
      wrapLazy(import('./pages/LiveExecution'))
    ),
  },
  {
    path: '/participant-setup',
    name: 'Participant Setup',
    component: lazy(() =>
      wrapLazy(import('./pages/ParticipantSetup'))
    ),
  },
  {
    path: '/aar',
    name: 'After Action Report',
    component: lazy(() =>
      wrapLazy(import('./pages/AfterActionReport'))
    ),
  },
  {
    path: '/cap-copilot',
    name: 'CAP Copilot',
    component: lazy(() =>
      wrapLazy(import('./pages/CapCopilotPage'))
    ),
  },
  {
    path: '/inject-log',
    name: 'Inject Log',
    component: lazy(() =>
      wrapLazy(import('./pages/InjectLogPage'))
    ),
  },
  {
    path: '/schedule',
    name: 'Schedule Builder',
    component: lazy(() =>
      wrapLazy(import('./pages/ScheduleBuilderPage'))
    ),
  },
  {
    path: '/timeline',
    name: 'Timeline Playback',
    component: lazy(() =>
      wrapLazy(import('./pages/TimelineExamplePage'))
    ),
  },
];
